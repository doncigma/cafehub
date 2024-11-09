<template>
    <!-- Whole header -->
    <header>
        <div class="flex flex-row bg-darkcaramel justify-between items-center px-2 py-2">
            <!-- Home link -->
            <div class="px-4">
                <NuxtLink class="text-base md:text-lg" to="/">Home</NuxtLink>
            </div>
            
            <!-- Logo -->
            <div class="flex w-1/4 items-end md:w-auto">
                <NuxtImg class="flex object-cover" src="logos/CafeHub-logo-trans.png"/>
            </div>
        </div>
    </header>
</template>