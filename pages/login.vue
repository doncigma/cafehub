<template>
    <div>
        <!-- Login -->
        <div>
            <span class="text-lg md:text-xl">Login</span>
        </div>

        <!-- Email and Password -->
        <div>
            <div>
                <UTextarea :rows="1" placeholder="Email" model-value="" />
                <UTextarea :rows="1" placeholder="Password" model-value="" />
            </div>
        </div>

        <!-- Login button -->
        <div>
            <UButton>Login</UButton>
        </div>

        <!-- Logo footer -->
    </div>
</template>