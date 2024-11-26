<script setup lang="ts">
import Joi from 'joi'
import { useUserStore } from '~/store/user';

const store = useUserStore();

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
})

const state = reactive({
    email: undefined,
    password: undefined,
    firstName: undefined,
    lastName: undefined,
})

const validate = (state: any) => {
    const errors = [];
    if (!state.email) errors.push({ path: 'email', message: 'Please enter a valid email address.' });
    if (!state.password) errors.push({ path: 'password', message: 'Password must be at least 8 characters long.' });
    if (!state.firstName) errors.push({ path: 'firstName', message: 'Required.' });
    if (!state.lastName) errors.push({ path: 'lastName', message: 'Required.' });
    return errors;
}

var errorMsg = ref < string | null > (null);
async function onSubmit() {
    const status = await SubmitReview();
    if (status === "success") {
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
    <UPopover overlay>
        <UButton label="Add a review" trailing-icon="i-heroicons-chevron-down-20-solid" />

        <template>
            <div class="p-4">
                <!-- Review Form -->
                <div v-if="store.isLoggedIn" class="flex px-4 items-center">
                    <UTextarea v-if="errorMsg">{{ errorMsg }}</UTextarea>

                    <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                        <UFormGroup name="password" label="Review">
                            <UTextarea></UTextarea>
                        </UFormGroup>

                        <UButton type="submit">Submit review</UButton>
                    </UForm>
                </div>
            </div>
        </template>
    </UPopover>
</template>