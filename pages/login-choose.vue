<template>
    <div>
        <!-- Logo -->
        <div>
            <NuxtImg src="public/logos/CafeHub logo trans.png" />
        </div>

        <!-- Blurb -->
        <div>
            <span class="text-lg md:text-xl">Find the best Cafe, reviewed by fellow coffee enthusiasts!</span>
        </div>

        <!-- Login button -->
        <div>
            <UButton color="primary" to="/signup">Sign Up</UButton>
            <UButton color="primary" to="/login">Login</UButton>
        </div>

        <div>
            <span>Not a member? <NuxtLink to="/signup">Sign up now</NuxtLink></span>
        </div>
    </div>
</template>