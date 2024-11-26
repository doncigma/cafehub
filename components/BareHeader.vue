<script setup lang="ts">
const router = useRouter();

function handleClick() {
    if (window.history.length > 1) router.back();
    else router.push('/');
}
</script>

<template>
    <header>
        <div class="flex flex-row bg-darkcaramel justify-between items-center px-2 py-2">
            <!-- Back link -->
            <div class="px-4">
                <NuxtLink class="text-base md:text-lg" @click.prevent="handleClick">Back</NuxtLink>
                <UButton @click="handleClick" class="text-blue-500 underline hover:text-blue-700">Back</UButton>
                <button @click="handleClick" class="text-blue-500 underline hover:text-blue-700">Back</button>
            </div>

            <!-- Logo -->
            <div class="flex w-1/4 items-end md:w-auto">
                <NuxtImg class="flex object-cover" src="logos/CafeHub-logo-trans.png" />
            </div>
        </div>
    </header>
</template>