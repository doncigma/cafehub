<script setup lang="ts">
import { NuxtImg, NuxtLink } from '#build/components';
</script>

<template>
    <header class="bg-brown">
        <!-- Whole header -->
        <div class="container mx-auto flex flex-row items-center justify-between px-2 pb-2 pt-2">
            <!-- Home link -->
            <div class="">
                <NuxtLink class="text-xs md:text-base" to="/">Home</NuxtLink>
            </div>

            <!-- Logo -->
            <div>
                <NuxtImg src="logos/logo.jpg">

                </NuxtImg>
            </div>
        </div>
    </header>
</template>