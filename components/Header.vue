<script setup lang="ts">
import { NuxtImg, NuxtLink } from '#build/components';
</script>

<template>
    <header class="bg-cafebrown">
        <!-- Whole header -->
        <div class="container mx-auto flex flex-row">
            <!-- Home link -->
            <div>
                <NuxtLink class="text-xs md:text-base" to="/">&lt;Home</NuxtLink>
            </div>
            
            <!-- Logo -->
            <div>
                <NuxtImg src="public/logos/CafeHub logo trans.png"/>
            </div>
        </div>
    </header>
</template>