<script>
definePageMeta({
  layout: 'login'
});
</script>

<template>
    <div class="flex flex-col">
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl font-bold text-darkcaramel">Sign-up</span>
        </div>
        
        <!-- Sign-up info -->
        <div>
            <div>
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Name" model-value=""/>
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Email" model-value=""/>
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Password" model-value=""/>
                <UTextarea color="" class="bg-caramel" :rows="1" placeholder="Confirm Password" model-value=""/>
            </div>
        </div>
        
        <!-- Sign Up button -->
        <div>
            <UButton color="" class="bg-darkcaramel" to="/signup">Sign Up</UButton>
        </div>
        
        <div>If you already have a registered account You can <NuxtLink to="/login" class="text-coffeewarm-950 font-bold hover:underline">login </NuxtLink>here!</div>
    </div>
</template>