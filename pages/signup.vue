<script setup lang="ts">
import useUserStore from '~/stores/userStore'
import { CreateAccount } from '~/utils/apiHandler'
import Joi from 'joi'

// Form schema
const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    username: Joi.string()
})

// Page state
const state = reactive({
    email: '',
    password: '',
    username: '',
    errorMsg: ''
})

// Update state and database
const userStore = useUserStore();
const router = useRouter();

async function onSignup() {
    const result = await CreateAccount(state.email, state.password, state.username);
    if (result?.status) {
        userStore.methods.updateUser(result.data.email, result.data.username);
        userStore.methods.setLoggedIn(true);

        setTimeout(() => {
            router.push('/cafepage');
        }, 1000);
    }
    else {
        state.errorMsg = "That account may already exist. Please try logging in."
    }
}

definePageMeta({ layout: 'login' });
</script>

<template>
    <div class="flex flex-col items-center">
        <!-- Sign in -->
        <div>
            <span class="text-lg md:text-xl font-bold text-darkcaramel">Signup</span>
        </div>

        <div class="flex flex-col px-4 space-y-2 items-center">
            <!-- Account Creation Error -->
            <p class="text-red-700" v-if="state.errorMsg">{{ state.errorMsg }}</p>

            <!-- Signup Form -->
            <UForm :schema="schema" :state="state" class="space-y-4">
                <UFormGroup name="username" label="Username">
                    <UInput v-model="state.username" />
                </UFormGroup>

                <UFormGroup name="email" label="Email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup name="password" label="Password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

            </UForm>

            <UButton @click="onSignup">Sign up</UButton>
        </div>

        <!-- Path to Login -->
        <div>If you already have an account, you can login <NuxtLink to="/login"
                class="text-coffeewarm-950 font-bold hover:underline">here</NuxtLink>!</div>
    </div>
</template>