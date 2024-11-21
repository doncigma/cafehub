<script>
import { Login } from "~/utils/apiHandler.js";

export default {
    data() {
        return {
            userEmail: "",
            userPassword: "",
            errorMsg: ""
        };
    },
    methods: {
        async handleLogin() {
            const status = await Login(this.userEmail, this.userPassword);
            if (status === "success") {
                setTimeout(() => {
                    this.$router.push('/index');
                }, 1000);
            }
            else {
                this.errorMsg = "Invalid email or password. Please try again."
            }
        }
    }
}

definePageMeta({
    layout: "login"
});
</script>

<template>
    <div>
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl">Login</span>
        </div>

        <!-- Email and Password Form -->
        <div>
            <UForm>
                <input class="bg-coffee-600" v-model="userEmail" type="email" placeholder="Enter your email" required />
                <input class="bg-coffee-800" v-model="userPassword" type="password" placeholder="Enter your password"
                    required />
                <button class="bg-coffee-300" type="submit" @click="handleLogin">Login</button>
            </UForm>
        </div>

        <!-- Error Message -->
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>

        <!-- Path to Signup -->
        <div class="flex justify-center">Not a member?&ThinSpace;<NuxtLink to="/signup"
                class="text-coffeewarm-950 font-bold hover:underline">Sign up,</NuxtLink>&ThinSpace;now!</div>
    </div>
</template>