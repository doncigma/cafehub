<script>
definePageMeta({
  layout: 'login'
});
</script>

<template>
    <div>
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl">Login</span>
        </div>
        
        <!-- Email and Password -->
        <div>
            <div>
                <UTextarea :rows="1" placeholder="Email" model-value=""/>
                <UTextarea :rows="1" placeholder="Password" model-value=""/>
            </div>
        </div>
        
        <!-- Login button -->
        <div>
            <UButton color="" class="bg-coffee-800" to="/login">Login</UButton>
        </div>

        <div class="flex justify-center">Not a member?&ThinSpace;<NuxtLink to="/signup" class="text-coffeewarm-950 font-bold hover:underline">Sign up,</NuxtLink>&ThinSpace;now!</div>
    </div>
</template>