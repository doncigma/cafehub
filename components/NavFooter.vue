<script setup lang="ts"/>

<template>
    <footer>
        <div class="flex flex-row bg-coffee-950 justify-center px-4 py-2">
            <UButton color="" to="/" class="h-4">
                <UIcon name="i-heroicons-home-20-solid" class="text-coffee-300 text-xl"/>
            </UButton>
            
            <UButton color="" to="/cafepage" class="h-4">
                <UIcon name="i-heroicons-magnifying-glass-16-solid" class="text-coffee-300 text-xl"/>
            </UButton>
            
            <UButton color="" to="/login-choose" class="h-4"> 
                <UIcon name="i-heroicons-user-16-solid" class="text-coffee-300 text-xl"/>
            </UButton>
        </div>
    </footer>
</template>