<script setup lang="ts">
import { methods } from '../stores';
import Joi from 'joi'

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    username: Joi.string()
})

const state = reactive({
    email: '',
    password: '',
    username: ''
})

const validate = (state: any) => {
    const errors = [];
    if (!state.username) errors.push({ path: 'username', message: 'Required.' });
    if (!state.email) errors.push({ path: 'email', message: 'Please enter a valid email address.' });
    if (!state.password) errors.push({ path: 'password', message: 'Password must be at least 8 characters long.' });
    return errors;
}

const router = useRouter();
var errorMsg = ref<string | null>(null);
async function onSignup() {
    const result = await CreateAccount(state.email, state.password, state.username);
    if (result.status) {
        methods.updateUser(state.email, state.username);
        methods.setLoggedIn(true);

        setTimeout(() => {
            router.push('/index');
        }, 1000);
    }
    else {
        errorMsg.value = "That account may already exist. Please try logging in."
    }
}

definePageMeta({
    layout: 'login'
});
</script>

<template>
    <div class="flex flex-col items-center">
        <!-- Sign in -->
        <div>
            <span class="text-lg md:text-xl font-bold text-darkcaramel">Signup</span>
        </div>

        <div class="flex px-4 items-center">
            <!-- Account Creation Error -->
            <UTextarea v-if="errorMsg">{{ errorMsg }}</UTextarea>

            <!-- Signup Form -->
            <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4" @submit="onSignup">
                <UFormGroup name="username" label="Username">
                    <UInput v-model="state.username" />
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

        <!-- Path to Login -->
        <div>If you already have an account, you can login <NuxtLink to="/login"
                class="text-coffeewarm-950 font-bold hover:underline">here</NuxtLink>!</div>
    </div>
</template>