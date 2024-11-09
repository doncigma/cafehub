import { NuxtLink } from '#build/components';
<template>
    <header class="bg-black">
        <!-- Whole Nav -->
        <div class="container mx-auto flex flex-row items-center 
            justify-between px-2 pb-2 pt-2">
            <!-- Logo words -->
            <div class="md:w-1/2">
                <div class="text-md md:text-2xl font-extrabold">
                    <span class="text-mexicanred-500 md:hover:text-mexicanred-300">Doncigma</span>
                    <span class="text-slate-400">Design</span>
                </div>
            </div>

            <!-- Index link -->
            <div class="text-slate-400 md:w-1/2">
                <NuxtLink class="text-xs md:text-base font-semibold" to="/">Home</NuxtLink>
            </div>

            <!-- About me link -->
            <div class="text-slate-400 md:w-1/2">
                <NuxtLink class="text-xs md:text-base font-semibold" to="/about">About</NuxtLink>
            </div>

            <!-- Portfolio link -->
            <div class="text-slate-400 md:w-1/2">
                <NuxtLink class="text-xs md:text-base font-semibold" to="/portfolio">Portfolio</NuxtLink>
            </div>

            <!-- Resume link -->
            <div class="text-slate-400 md:w-1/2">
                <NuxtLink class="text-xs md:text-base font-semibold" to="/resume">Resume</NuxtLink>
            </div>

            <!-- Contact link -->
            <div class="text-slate-400 md:w-1/2">
                <NuxtLink class="text-xs md:text-base font-semibold" to="/contact">Contact</NuxtLink>
            </div>
        </div>

        <!-- Bottom line -->
        <div class="container mx-auto border-t p-3 border-slate-900 md:px-12" />
    </header>
</template>