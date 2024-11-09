<template>
    <div class="flex flex-col md:flex-row">
        <div class="hidden md:flex overflow-hidden">
            <NuxtImg src="about/street-lights.jpg" class="w-full"/>
        </div>

        <div class="overflow-hidden">
            <NuxtImg src="about/myself.jpg" class="w-full"/>
        </div>

        <div class="hidden md:flex overflow-hidden">
            <NuxtImg src="about/the-stang.jpg" class="w-full"/>
        </div>
    </div>
        
    <!-- Desc section -->
    <div class="flex justify-evenly items-center p-4
        bg-gradient-to-t from-slate-900 to-mexicanred-500"
    >   
        <div class="hidden md:flex overflow-hidden w-1/5">
            <NuxtImg src="/doncigma-logo.jpg" class="w-full"/>
        </div>
        
        <div class="bg-black m-2 p-3 text-left md:w-2/5">
            <p class="bg-black text-md text-slate-400 text-justify p-4 
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

        <div class="hidden md:flex overflow-hidden w-1/5">
            <NuxtImg src="/doncigma-logo.jpg" class="w-full"/>
        </div>
    </div>
</template>