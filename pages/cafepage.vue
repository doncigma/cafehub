<script setup lang="ts">
import useUserStore from '~/stores/userStore';
import { SubmitReview } from '~/utils/apiHandler';
import Joi from 'joi';

// Page State
const state = reactive({
    errorMsg: '',
    rating: 0,
    reviewContent: '',
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
        state.cafeData = result.data;

        state.cafeName = cafeData.cafeName;
        state.cafeDrinks = cafeData.cafeDrinks;
        state.cafeReviews = cafeData.cafeReviews;
        state.cafeSearched = true;
    }
    else {
        state.errorMsg = "Could not get list of cafe's. Please try again later."
        state.cafeName = '';
    }
}

// Update Store and Database
const userStore = useUserStore();
const userState = userStore.state;

async function onSubmit() {
    const result = await SubmitReview(userState.username, state.rating, state.reviewContent);
    if (result.status) {

    }
    else state.errorMsg = "There was a problem submitting this review. Please try again later."
}

definePageMeta({ layout: 'dashboard' });
</script>

<template>
    <!-- Cafe Search -->
    <div v-if="!state.cafeSearched">
        <UTextarea v-model="state.cafeName" @keyup.enter="search" placeholder="Search..." />
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
            <div v-if="!userState.isLoggedIn" class="px-4">
                To leave a review, you must log in, first! Log in <NuxtLink to="/login"
                    class="text-coffeewarm-950 font-bold hover:underline">here.</NuxtLink>
            </div>

            <!-- Popout -->
            <div class="">
                <UPopover v-if="userState.isLoggedIn" overlay>
                    <UButton label="Add a review" @click="clearReview"
                        trailing-icon="i-heroicons-chevron-down-20-solid" />

                    <template #panel>
                        <div class="p-4">
                            <!-- Review Form -->
                            <div class="flex flex-col items-start px-4">
                                <!-- Error Message -->
                                <UTextarea v-if="state.errorMsg">{{ state.errorMsg }}</UTextarea>

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