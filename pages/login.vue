<script>
import { Login } from '~/utils/apiHandler.js';

export default {
    data() {
        return {
            userEmail: "",
            userPassword: ""
        };
    },
    methods: {
        CheckLogin() {
            if (Login(this.userEmail, this.userPassword) == "success") {
                this.$router.push('/index.vue')
            }
        }
    }
}

definePageMeta({
  layout: 'login'
});
</script>

<template>
    <div>
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl">Login</span>
        </div>
        
        <!-- Email and Password -->
        <div>
            <div>
                <UTextarea :rows="1" placeholder="Email" v-model="userEmail"/>
                <UTextarea :rows="1" placeholder="Password" v-model="userPassword"/>
            </div>
        </div>
        
        <!-- Login button -->
        <div>
            <UButton color="" class="bg-coffee-800" @click="CheckLogin">Login</UButton>
        </div>

        <div class="flex justify-center">Not a member?&ThinSpace;<NuxtLink to="/signup" class="text-coffeewarm-950 font-bold hover:underline">Sign up,</NuxtLink>&ThinSpace;now!</div>
    </div>
</template>