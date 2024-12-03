<script setup lang="ts">
const router = useRouter();

function handleClick() {
    if (window.history.length > 1) router.back();
    else router.push('/');
}
</script>

<template>
    <header>
        <div class="flex flex-row bg-coffee-950 justify-between items-center px-2 py-2">
            <!-- Back link -->
            <div class="px-4">
                <button @click="handleClick" class="text-coffee-50 hover:text-coffee-300 hover:underline">Back</button>
            </div>

            <!-- Logo -->
            <div class="flex w-1/4 items-end md:w-auto">
                <NuxtImg class="flex object-cover" :src="$config.public.transLogoSrc" />
            </div>
        </div>
    </header>
</template>