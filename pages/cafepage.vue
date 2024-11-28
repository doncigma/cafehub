<script setup lang="ts">
import { store } from '../stores/userStore';
import Joi from 'joi'

const schema = Joi.object({
    reviewContent: Joi.string().min(10).max(500).required(),
})

const state = reactive({
    reviewContent: ''
})

const validate = (state: any) => {
    const errors = [];
    if (!state.reviewContent) errors.push({ path: 'reviewContent', message: 'Please enter a review.' });
    else if (state.reviewContent.length() < 10) errors.push({ path: 'reviewContent', message: 'Review is too short.' });
    else if (state.reviewContent.length() > 500) errors.push({ path: 'reviewContent', message: 'Review is too long.' });
    return errors;
}

var errorMsg = ref<string | null>(null);
async function onSubmit() {
    const status = await SubmitReview(store.username, state.reviewContent);
    if (status) {
        const router = useRouter();
        setTimeout(() => {
            router.back();
        }, 1000);
    }
    else {
        errorMsg.value = "There was a problem submitting this review. Please try again later."
    }
}
</script>

<template>
    

    <!-- Review Popout -->
    <div>
        <!-- Login Message -->
        <p v-if="!store.isLoggedIn">
            To leave a review, you must log in, first! Log in <NuxtLink to="/login"
                class="text-coffeewarm-950 font-bold hover:underline">here.</NuxtLink>
        </p>

        <!-- Popout -->
        <UPopover overlay>
            <UButton label="Add a review" trailing-icon="i-heroicons-chevron-down-20-solid" />

            <template #panel>
                <div class="p-4">
                    <!-- Review Form -->
                    <div class="flex px-4 items-center">
                        <!-- Error Message -->
                        <UTextarea v-if="errorMsg">{{ errorMsg }}</UTextarea>

                        <!-- Form -->
                        <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
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
</template>