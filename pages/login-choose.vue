<template>
    <div>
        <!-- Logo -->
        <div>
            <NuxtImg :src="$config.public.transLogoSrc" />
        </div>

        <!-- Blurb -->
        <div>
            <span class="text-lg md:text-xl">Find the best Cafe, reviewed by fellow coffee enthusiasts!</span>
        </div>

        <!-- Login button -->
        <div class="flex justify-center bg-white">
            <UButton color="brown" to="/signup">Sign Up</UButton>
            <UButton to="/login">Login</UButton>
        </div>

        <div>
            <span>Not a member? <NuxtLink to="/signup">Sign up now</NuxtLink></span>
        </div>
    </div>
</template>