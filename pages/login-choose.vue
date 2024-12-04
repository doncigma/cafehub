<script setup lang="ts">
definePageMeta({ layout: 'login' });
</script>

<template>
    <div class="flex flex-col">
        <!-- Blurb -->
        <div class="flex justify-center text-coffee-100 text-lg md:text-xl">Find the best Cafe, reviewed by fellow
            coffee enthusiasts!</div>

        <!-- Login button -->
        <div class="flex flex-col items-center justify-center space-y-1">
            <UButtonGroup size="xl" orientation="vertical" class="w-44 md:w-72 space-y-2">
                <UButton to="/signup">Sign Up</UButton>
                <UButton to="/login">Login</UButton>
            </UButtonGroup>
        </div>
    </div>
</template>