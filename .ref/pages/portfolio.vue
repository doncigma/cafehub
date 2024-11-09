<template>
    <!-- Portfolio carousel -->
    <div class="carousel mt-1 bg-gradient-to-t from-slate-900 to-mexicanred-500 h-22 md:h-144">
        <div id="item1" class="carousel-item w-full overflow-hidden">
            <NuxtImg src="portfolio/mock-creatures.png" class="w-full object-cover" />
        </div>

        <div id="item2" class="carousel-item w-full overflow-hidden">
            <NuxtImg src="portfolio/mock-design.png" class="w-full object-cover" />
        </div>

        <div id="item3" class="carousel-item w-full overflow-hidden">
            <NuxtImg src="portfolio/mock-graphic.png" class="w-full object-cover" />
        </div>
    </div>

    <div class="flex justify-center w-full py-2 gap-2 border border-slate-500">
        <a href="#item1" class="btn btn-xs">1</a> 
        <a href="#item2" class="btn btn-xs">2</a> 
        <a href="#item3" class="btn btn-xs">3</a>
    </div>
    
    <!-- Logo section -->
    <div class="flex flex-col md:flex-row justify-between py-4
        bg-gradient-to-t from-slate-900 to-mexicanred-500"
    >
        <!-- Projects description -->
        <div class="bg-black m-2 p-4 md:w-2/5">
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
        <div class="p-4 md:w-1/5">
            <NuxtImg src="/doncigma-logo.jpg" class=""/>
        </div>
        
        <!-- About Me -->
        <div class="bg-black m-2 p-4 md:w-2/5">
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

    <!-- Creatures project -->
    <div class="flex flex-row items-center pt-4
        bg-gradient-to-t to-slate-900 from-mexicanred-500"
    >
        <div class="hidden md:flex overflow-hidden w-1/2">
            <NuxtImg src="portfolio/mock-creatures.png" class="w-full"/>
        </div>
        
        <div class="m-8 sm:w-1/2 lg:w-1/5 md:pl-24">
            <p class="text-sm md:text-xl text-justify">
                I am currently working on an evolution simulation in C++. 
                I was inspired to do this while watching a Youtube video on
                it. I really enjoy working in C++ so this is more of a 
                pleasure project.
            </p>
        </div>

        <div class="w-full md:w-1/5">
            <NuxtImg src="portfolio/c++.png" class="w-full"/>
        </div>
    </div>

    <!-- Web development -->
    <div class="flex flex-row justify-end items-center 
        bg-gradient-to-t from-slate-900 to-mexicanred-500"
    >   
        <div class="w-full md:w-1/5">
            <NuxtImg src="portfolio/nuxt.png" class="w-full"/>
        </div>

        <div class="m-8 sm:w-1/2 lg:w-1/5 md:pr-24">
            <p class="text-sm md:text-xl text-justify">
                I am still learning but have experience in the Nuxt and Vue frameworks, 
                as well as HTML and JavaScript: as seen in this very website, 
                built with the aformentioned tools.
            </p>
        </div>
        
        <div class="hidden md:flex overflow-hidden w-1/2">
            <NuxtImg src="portfolio/mock-design.png" class="w-full "/>
        </div>
    </div>

    <!-- Graphic design -->
    <div class="flex flex-row items-center 
        bg-gradient-to-t to-slate-900 from-mexicanred-500"
    >
        <div class="hidden md:flex overflow-hidden w-1/2">
            <NuxtImg src="portfolio/mock-graphic.png" class="w-full"/>
        </div>

        <div class="m-8 sm:w-1/2 lg:w-1/5 md:pl-24">
            <p class="text-sm md:text-xl text-justify">
                I hold epxerience in graphic design in applications like Adobe Photoshop 
                and Adboe Illustrator. I have created art for board games, website art, 
                and other projects.
            </p>
        </div>

        <div class="w-full md:w-1/6">
            <NuxtImg src="portfolio/adobe-logo.jpg" class="w-full h-full"/>
        </div>
    </div>
</template>