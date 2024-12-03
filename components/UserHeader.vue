<script setup lang="ts">
import useUserStore from '../stores/userStore';

const userStore = useUserStore();
const userState = userStore.state;

const router = useRouter();
function handleClick() {
    if (window.history.length > 1) router.back();
    else router.push('/');
}
</script>

<template>
    <header>
        <div class="flex flex-row bg-coffee-950 justify-between items-center px-2 py-2">
            <!-- Greeting and Back Container -->
            <div class="flex flex-col items-start space-y-2 md:space-y-6 px-4">
                <!-- Back link -->
                <button @click="handleClick" class="text-coffee-50 hover:text-coffee-300 hover:underline">Back</button>
                
                <!-- Username Greeting -->
                <div class="text-white text-2xl md:text-3xl tracking-wide font-normal font-['Playfair Display'] mb-2">
                    Hello<span v-if="userState.isLoggedIn">, {{ userState.username }}</span><span v-else>!</span>
                </div>
            </div>

            <!-- Logo -->
            <div class="flex w-1/4 items-end md:w-auto">
                <NuxtImg class="flex object-cover" :src="$config.public.transLogoSrc" />
            </div>
        </div>
    </header>
</template>