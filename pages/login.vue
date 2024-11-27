<script>
import { methods } from '../stores';

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMsg: ''
        };
    },
    methods: {
        handleLogin() {
            const result = Login(this.email, this.password);
            if (result.status) {
                methods.updateUser(this.email, result.username);
                methods.setLoggedIn(true);
                
                setTimeout(() => {
                    this.$router.push('/index');
                }, 1000);
            }
            else {
                this.errorMsg = "Invalid email or password. Please try again.";
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
                <input class="bg-coffee-600" v-model="email" type="email" placeholder="Enter your email" required />
                <input class="bg-coffee-800" v-model="password" type="password" placeholder="Enter your password"
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