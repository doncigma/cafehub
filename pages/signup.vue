<script setup lang="ts">
import Joi from 'joi'
import type { FormSubmitEvent } from '#ui/types'

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string()
        .min(8)
        .required()
})

const state = reactive({
    email: undefined,
    password: undefined
})

async function onSubmit(event: FormSubmitEvent<any>) {
    const status = await CreateAccount(this.userEmail, this.userPassword, this.userFirstName, this.userLastName);
    if (status === "success") {
        // store user data somewhere for display
        setTimeout(() => {
            this.$router.push('/index');
        }, 1000);
    }
    else {
        this.errorMsg = "That account may already exist. Please try logging in."
    }
}

// export default {
//     data() {
//         return {
//             searchQuery: ""
//         };
//     },
//     methods: {
// async handleSignup() {
//     const status = await CreateAccount(this.userEmail, this.userPassword, this.userFirstName, this.userLastName);
//     if (status === "success") {
//         // store user data somewhere for display
//         setTimeout(() => {
//             this.$router.push('/index');
//         }, 1000);
//     }
//     else {
//         this.errorMsg = "That account may already exist. Please try logging in."
//     }
// }
//     }
// }

definePageMeta({
    layout: 'login'
});
</script>

<template>
    <div class="flex flex-col">
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl font-bold text-darkcaramel">Sign-up</span>
        </div>

        <!-- Sign-up info -->
        <div>
            <div>
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Name" model-value="" />
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Email" model-value="" />
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Password" model-value="" />
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Confirm Password" model-value="" />
            </div>

            <!-- <UForm>
                <input class="bg-caramel" v-model="userFirstName" type="name" placeholder="Enter your email" required />
                <input class="bg-caramel" v-model="userLastName" type="name" placeholder="Enter your email" required />
                <input class="bg-caramel" v-model="userEmail" type="email" placeholder="Enter your email" required />
                <input class="bg-caramel" v-model="userPassword" type="password" placeholder="Enter your password"
                    required />

                <button class="bg-darkcaramel" type="submit" @click="handleSignup">Sign up</button>
            </UForm> -->

            <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="FirstName" name="firstName">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="LastName" name="lastName">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <UButton type="submit">Sign up</UButton>
            </UForm>
        </div>

        <div>If you already have a registered account, you can <NuxtLink to="/login"
                class="text-coffeewarm-950 font-bold hover:underline">login </NuxtLink>here!</div>
    </div>
</template>