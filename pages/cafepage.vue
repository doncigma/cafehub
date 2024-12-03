<script setup lang="ts">
import useUserStore from '~/stores/userStore';
import { SubmitReview } from '~/utils/apiHandler';
import Joi from 'joi';

// Page State
const state = reactive({
    errorMsg: '',
    rating: 0,
    reviewContent: '',
    reviewMsg: '',
    cafeName: '',
    cafeSearched: false,
    cafeDrinks: [], // array of objects
    cafeReviews: [],
});

// Form Setup
const schema = Joi.object({
    rating: Joi.number(),
    reviewContent: Joi.string().min(10).max(500).required(),
});

const validate = (state: any) => {
    const errors = [];
    if (!state.reviewContent) errors.push({ path: 'reviewContent', message: 'Please enter a review.' });
    else if (!state.reviewContent) errors.push({ path: 'reviewContent', message: 'Invalid review length.' });
    else if (!state.rating) errors.push({ path: 'reviewContent', message: 'Please leave a rating.' });
    return errors;
}

// Review Functions
function clearReview() {
    state.rating = 0;
    state.reviewContent = '';
}

function logRating(event: number) {
    state.rating = event;
}

// Cafe Search
async function search(cafeName: string) {
    const result = await GetCafeData(cafeName);
    if (result.status) {
        state.cafeName = result.data.cafeName;
        state.cafeDrinks = result.data.cafeDrinks;
        state.cafeReviews = result.data.cafeReviews;
        state.cafeSearched = true;
    }
    else {
        state.errorMsg = "Could not get list of cafe's. Please try again later."
        state.cafeName = '';
    }
}

// Update Store and Database
const userStore = useUserStore();

async function onSubmit() {
    state.reviewMsg = '';

    const user = userStore.methods.getUser();
    const result = await SubmitReview(user.username, state.rating, state.reviewContent);
    if (result?.status) {
        state.reviewMsg = 'Review submitted!'
    }
    else {
        state.errorMsg = "There was a problem submitting this review. Please try again later."
        state.reviewMsg = '';
    }
}

definePageMeta({ layout: 'dashboard' });
</script>

<template>
    <!-- Cafe Search -->
    <div v-if="!state.cafeSearched">
        <UTextarea v-model="state.cafeName" @keyup.enter="search" placeholder="Search cafe's..." />
    </div>

    <!-- Cafe Display -->
    <div v-if="state.cafeSearched">
        <h1>{{ state.cafeName }}</h1>
        
        <!-- Cafe Tables -->
        <div>
            <!-- Drinks -->
            <UTable label="Drinks" :rows="state.cafeDrinks" />

            <!-- Reviews -->
            <UTable label="Reviews" :rows="state.cafeReviews" />
        </div>

        <!-- Cafe Review -->
        <div class="items-center">
            <!-- Login Message -->
            <div v-if="!userStore.methods.getLoggedIn()" class="px-4">
                To leave a review, you must log in, first! Log in <NuxtLink to="/login"
                    class="text-coffeewarm-950 font-bold hover:underline">here.</NuxtLink>
            </div>

            <!-- Popout -->
            <div class="">
                <UPopover v-if="userStore.methods.getLoggedIn()" overlay>
                    <UButton label="Add a review" @click="clearReview"
                        trailing-icon="i-heroicons-chevron-down-20-solid" />

                    <template #panel>
                        <div class="p-4">
                            <!-- Review Form -->
                            <div class="flex flex-col items-start px-4">
                                <!-- Error Message -->
                                <div v-if="state.errorMsg">{{ state.errorMsg }}</div>
                                <div v-if="state.reviewMsg">{{ state.reviewMsg }}</div>
                                
                                <!-- Form -->
                                <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4"
                                    @submit="onSubmit">
                                    <NuxtRating @rating-selected="logRating" :read-only="false" :rating-value="0"
                                        :rating-step="1" />

                                    <UFormGroup name="reviewContent" label="Review">
                                        <UTextarea v-model="state.reviewContent" />
                                    </UFormGroup>

                                    <UButton type="submit">Submit review</UButton>
                                </UForm>
                            </div>
                        </div>
                    </template>
                </UPopover>
            </div>
        </div>
    </div>
</template>