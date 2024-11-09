<template>
    <!-- Logo section -->
    <div class="flex flex-col md:flex-row justify-between py-4
        bg-gradient-to-t from-slate-900 to-mexicanred-500"
    >
        <!-- Blurb -->
        <div class="bg-black m-4 p-4 md:w-2/5">
            <p class="bg-black text-sm md:text-lg text-slate-400 text-justify p-4 
                border-2 border-slate-800"
            >
            Hello, I'm Elijah Johnson, a passionate and creative web developer. 
            I specialize in crafting modern and unique websites that represent 
            my clients' personalities and businesses. With a strong background in 
            custom web design and development, I strive to bring your vision to life 
            and create an online presence that stands out.
        
            <br><br>
        
            Let's work together to showcase the best of your brand and 
            bring your ideas to the digital world. 
            <NuxtLink to="/contact" class="underline" target="_blank">Reach out to me</NuxtLink>
            to discuss your project and how we can collaborate to achieve 
            your goals.
        
            <br><br>
        
            Elijah Johnson.
            </p>
        </div>
        
        <!-- Logo -->
        <div class="m-4 md:w-1/5">
            <NuxtImg src="/doncigma-logo.jpg" class=""/>
        </div>
        
        <!-- Blurb -->
        <div class="bg-black m-4 p-4 md:w-2/5">
            <p class="bg-black text-sm md:text-lg text-slate-400 text-justify p-4 
                border-2 border-slate-800"
            >
            Hello, I'm Elijah Johnson, a passionate and creative web developer. 
            I specialize in crafting modern and unique websites that represent 
            my clients' personalities and businesses. With a strong background in 
            custom web design and development, I strive to bring your vision to life 
            and create an online presence that stands out.
        
            <br><br>
        
            Let's work together to showcase the best of your brand and 
            bring your ideas to the digital world. 
            <NuxtLink to="/contact" class="underline" target="_blank">Reach out to me</NuxtLink>
            to discuss your project and how we can collaborate to achieve 
            your goals.
        
            <br><br>
        
            Elijah Johnson.
            </p>
        </div>
    </div>

    <!-- Divider -->
    <div class="bg-black py-6 m-1"/>

    <!-- Contacts section -->
    <div class="flex flex-col items-center p-8 md:flex-row md:justify-evenly
        bg-gradient-to-t from-slate-900 to-mexicanred-500"
    >
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/elijah-johnson-27b82a232/" target="_blank" 
            class="overflow-hidden w-2/5 md:w-1/5"
        >
            <NuxtImg src="contacts/linkedin-logo.png" class="w-full"/>
        </a>

        <p class="m-4 text-2xl font-semibold">
            Contact me!
        </p>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ejdylan1029@gmail.com" 
            target="_blank" class="overflow-hidden w-2/5 md:w-1/5"
        >
            <NuxtImg src="contacts/gmail-logo.png" class="w-full"/>
        </a>
    </div>
</template>