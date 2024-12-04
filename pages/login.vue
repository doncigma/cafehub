<script setup lang="ts">
import useUserStore from '~/stores/userStore'
import { Login } from '~/utils/apiHandler'
import Joi from 'joi'

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    username: Joi.string()
})

const state = reactive({
    email: '',
    password: '',
    username: '',
    errorMsg: ''
})

const validate = (state: any) => {
    const errors = [];
    if (!state.email) errors.push({ path: 'email', message: 'Please enter a valid email address.' });
    if (!state.password) errors.push({ path: 'password', message: 'Password must be at least 8 characters long.' });
    return errors;
}

// Update State and Database
const userStore = useUserStore();
const router = useRouter();

async function onLogin() {
    // $fetch('api/login', {
    //     method: 'GET',
    //     body: { email: 'GregPaul@gmail.com', password: 'Password' }
    // });

    const result =  await Login(state.email, state.password);
    console.log(result)
    if (result?.status) {
        userStore.methods.updateUser(result.data.email, result.data.username);
        userStore.methods.setLoggedIn(true);

        setTimeout(() => {
            router.push('/cafepage');
        }, 1000);
    }
    else {
        state.errorMsg = "There was an error loggin in. Try again later or sign up if you have not already."
    }
}

definePageMeta({
    layout: "login"
});
</script>

<template>
    <div class="flex flex-col items-center space-y-2">
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl">Login</span>
        </div>

        <!-- Login Form -->
        <div class="flex flex-col px-4 space-y-2 items-center">
            <!-- Error Message -->
            <p class="text-red-700" v-if="state.errorMsg">{{ state.errorMsg }}</p>

            <!-- Form -->
            <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4">
                <UFormGroup name="email" label="Email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup name="password" label="Password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

            </UForm>

            <UButton @click="onLogin">Log in</UButton>
        </div>

        <!-- Path to Signup -->
        <div class="flex justify-center">Not a member?&ThinSpace;<NuxtLink to="/signup"
                class="text-coffeewarm-950 font-bold hover:underline">Sign up,</NuxtLink>&ThinSpace;now!</div>
    </div>
</template>