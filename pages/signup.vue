<template>
    <div>
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl">Sign-up</span>
        </div>
        
        <!-- Sign-up info -->
        <div>
            <div>
                <UTextarea :rows="1" placeholder="Name" model-value=""/>
                <UTextarea :rows="1" placeholder="Email" model-value=""/>
                <UTextarea :rows="1" placeholder="Password" model-value=""/>
                <UTextarea :rows="1" placeholder="Confirm Password" model-value=""/>
            </div>
        </div>
        
        <!-- Sign Up button -->
        <div>
            <UButton>Sign Up</UButton>
            <span>If you already have a registered account You can <NuxtLink to="/signup">Login here</NuxtLink>!</span>
        </div>
    </div>
    
    <!-- Logo footer -->
    <footer>        
        <div>
            <NuxtImg src="public/logos/CafeHub logo trans.png"/>
        </div>
    </footer>
</template>