<script setup lang="ts">
import { store } from '../stores/userStore';
import { SubmitReview } from '~/utils/apiHandler';
import Joi from 'joi';

const schema = Joi.object({
    rating: Joi.number(),
    reviewContent: Joi.string().min(10).max(500).required(),
});

const state = reactive({
    rating: 0,
    reviewContent: ''
});

const validate = (state: any) => {
    const errors = [];
    if (!state.reviewContent) errors.push({ path: 'reviewContent', message: 'Please enter a review.' });
    else if (!state.reviewContent) errors.push({ path: 'reviewContent', message: 'Invalid review length.' });
    else if (!state.rating) errors.push({ path: 'reviewContent', message: 'Please leave a rating.' });
    return errors;
}

function clearReview() {
    state.rating = 0;
    state.reviewContent = '';
}

function logRating(event: number) {
    state.rating = event;
}

var errorMsg = ref<string | null>(null);
async function onSubmit() {
    const status = await SubmitReview(store.username, state.rating, state.reviewContent);
    if (status) {
        
    }
    else errorMsg.value = "There was a problem submitting this review. Please try again later."
}

definePageMeta({
    layout: 'dashboard'
});
</script>

<template>
    <!-- Review Popout -->
    <div class="items-center">
        <!-- Login Message -->
        <div v-if="!store.isLoggedIn" class="px-4">
            To leave a review, you must log in, first! Log in <NuxtLink to="/login"
                class="text-coffeewarm-950 font-bold hover:underline">here.</NuxtLink>
        </div>

        <!-- Popout -->
        <div class="">
            <UPopover v-if="!store.isLoggedIn" overlay>
                <UButton label="Add a review" @click="clearReview" trailing-icon="i-heroicons-chevron-down-20-solid" />
                
                <template #panel>
                    <div class="p-4">
                        <!-- Review Form -->
                        <div class="flex flex-col items-start px-4">
                            <!-- Error Message -->
                            <UTextarea v-if="errorMsg">{{ errorMsg }}</UTextarea>
                            
                            <!-- Form -->
                            <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                                <!-- Rating -->
                                <NuxtRating @rating-selected="logRating" :read-only="false" :rating-value="0" :rating-step="1" />
                                
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
</template>