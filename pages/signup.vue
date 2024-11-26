<script setup lang="ts">
import Joi from 'joi'
// import type { FormError, FormSubmitEvent } from '#ui/types'

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

var errorMsg = ref<string | null>(null);
async function onSubmit() {
    const status = await CreateAccount(state.email, state.password, state.firstName, state.lastName);
    if (status === "success") {
        const router = useRouter();
        setTimeout(() => {
            router.push('/index');
        }, 1000);
    }
    else {
        errorMsg.value = "That account may already exist. Please try logging in."
    }
}

// export default {
//     data() {
//         return {
//             email: undefined,
//             password: undefined,
//             firstName: undefined,
//             lastName: undefined
//         };
//     },
//     methods: {
//         async handleSignup() {
//             const status = await CreateAccount(this.userEmail, this.userPassword, this.userFirstName, this.userLastName);
//             if (status === "success") {
//                 // store user data somewhere for display
//                 setTimeout(() => {
//                     this.$router.push('/index');
//                 }, 1000);
//             }
//             else {
//                 this.errorMsg = "That account may already exist. Please try logging in."
//             }
//         }
//     }
// }

definePageMeta({
    layout: 'login'
});
</script>

<template>
    <div class="flex flex-col items-center">
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl font-bold text-darkcaramel">Sign-up</span>
        </div>

        <div class="flex px-4 items-center">
            <!-- Account Creation Error -->
            <UTextarea v-if="errorMsg">{{ errorMsg }}</UTextarea>

            <!-- Sign-up Form -->
            <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup name="firstName" label="First Name">
                    <UInput v-model="state.firstName" />
                </UFormGroup>

                <UFormGroup name="lastName" label="Last Name">
                    <UInput v-model="state.lastName" />
                </UFormGroup>

                <UFormGroup name="email" label="Email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup name="password" label="Password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <UButton type="submit">Sign up</UButton>
            </UForm>
        </div>

        <div>If you already have a registered account, you can <NuxtLink to="/login"
                class="text-coffeewarm-950 font-bold hover:underline">login </NuxtLink>here!</div>
    </div>
</template>