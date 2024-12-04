<script setup lang="ts">
import useUserStore from '~/stores/userStore'
import { SubmitReview } from '~/utils/apiHandler'
import Joi from 'joi'

// Form schema
const schema = Joi.object({
    rating: Joi.number(),
    reviewContent: Joi.string().min(10).max(500).required(),
});

// Page state
const state = reactive({
    errorMsg: '',
    ratings: {
        taste: 0,
        service: 0,
        atmosphere: 0
    },
    reviewContent: '',
    reviewMsg: '',
    cafeName: '',
    cafeSearched: false,
    cafeDrinks: [{}], // array of objects
    cafeReviews: [{}]
});

// Review functions
function clearReview() {
    state.ratings.taste = 0;
    state.ratings.service = 0;
    state.ratings.atmosphere = 0;
    state.reviewContent = '';
}

function logTasteRating(event: number) {
    state.ratings.taste = event;
}

function logServiceRating(event: number) {
    state.ratings.service = event;
}

function logAtmosphereRating(event: number) {
    state.ratings.atmosphere = event;
}

// Cafe search
async function search() {
    const result = await GetCafeData(state.cafeName);
    if (result?.status) {
        state.cafeName = result.data.cafeName;
        state.cafeDrinks = result.data.Drinks;
        state.cafeReviews = result.data.Review;
        state.cafeSearched = true;
    }
    else {
        state.errorMsg = 'That cafe does not exist.';
        state.cafeName = '';
    }
}

// Update store and database
const userStore = useUserStore();

async function onSubmit() {
    state.reviewMsg = '';

    const user = userStore.methods.getUser();
    const result = await SubmitReview(user.username, state.ratings, state.reviewContent);
    if (result?.status) {
        state.reviewMsg = 'Review submitted!';
    }
    else {
        state.errorMsg = 'There was a problem submitting this review.';
        state.reviewMsg = '';
    }
}

definePageMeta({ layout: 'dashboard' });
</script>

<template>
    <!-- Cafe Search -->
    <div class="flex flex-col items-center" v-if="!state.cafeSearched">
        <p>Search for your favorite cafe!</p>
        <UTextarea v-model="state.cafeName" placeholder="Search cafe's..." />
        <UButton @click="search">Search</UButton>
    </div>

    <!-- Cafe Display -->
    <div class="flex flex-col justify-center items-center space-y-2" v-if="state.cafeSearched">
        <h1>{{ state.cafeName }}</h1>

        <!-- Cafe Tables -->
        <div class="flex flex-col md:flex-row justify-start items-center space-y-2 md:space-y-0 md:space-x-4">
            <!-- Drinks -->
            <UTable label="Drinks" :rows="state.cafeDrinks" class="border border-coffee-950" />

            <!-- Reviews -->
            <UTable label="Reviews" :rows="state.cafeReviews" class="border border-coffee-950" />
        </div>

        <!-- Cafe Review -->
        <div class="flex justify-center items-center">
            <!-- Login Message -->
            <div v-if="!userStore.methods.getLoggedIn()" class="px-4">
                To leave a review, you must log in, first! Log in <NuxtLink to="/login"
                    class="text-coffeewarm-950 font-bold hover:underline">here.</NuxtLink>
            </div>

            <!-- Popout -->
            <div class="flex justify-center items-center">
                <UPopover v-if="userStore.methods.getLoggedIn()" overlay>
                    <UButton label="Add a review" @click="clearReview"
                        trailing-icon="i-heroicons-chevron-down-20-solid" />

                    <template #panel>
                        <div class="flex flex-col justify-center items-center p-4">
                            <!-- Review Form -->
                            <div class="flex flex-col justify-center items-start px-4">
                                <!-- Error Message -->
                                <span class="flex text-wrap w-4 md:w-auto" v-if="state.errorMsg">{{ state.errorMsg }}</span>
                                <span class="flex text-wrap w-4 md:w-auto" v-if="state.reviewMsg">{{ state.reviewMsg }}</span>

                                <!-- Form -->
                                <UForm :schema="schema" :state="state" class="space-y-2">
                                    <p>Taste</p>
                                    <NuxtRating @rating-selected="logTasteRating" :read-only="false" :rating-value="0"
                                        :rating-step="1" />

                                    <p>Service</p>
                                    <NuxtRating @rating-selected="logServiceRating" :read-only="false" :rating-value="0"
                                        :rating-step="1" />

                                    <p>Atmosphere</p>
                                    <NuxtRating @rating-selected="logAtmosphereRating" :read-only="false"
                                        :rating-value="0" :rating-step="1" />

                                    <UFormGroup name="reviewContent" label="Review">
                                        <UTextarea v-model="state.reviewContent" />
                                    </UFormGroup>
                                </UForm>

                                <UButton @click="onSubmit">Submit review</UButton>
                            </div>
                        </div>
                    </template>
                </UPopover>
            </div>
        </div>
    </div>
</template>