
import { NuxtLink } from '#build/components';
<template>
    <footer class="bg-slate-50 dark:bg-black">
      <div
        class="container mx-auto flex flex-col items-start space-y-6 px-8 pb-8 pt-10 md:flex-row md:space-y-0 md:space-x-12 md:px-12"
      >
        <!-- Desc -->
        <div
          class="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left"
        >
          <div class="w-full text-lg font-extrabold md:w-fit md:text-left">
            <span class="text-mexicanred-500">Doncigma</span>
            <span class="dark:text-slate-400">Design</span>
          </div>

          <p class="text-sm text-slate-600">
            Doncigma Design provides custom web design and development services
            to help you create a website that is unique, modern, and
            most importantly, a representation of you. Put the best of you first, Doncigma Design.
          </p>
        </div>
        
        <!-- Contacts -->
        <div class="w-full text-center text-slate-400 md:w-1/5 md:text-left">
          <div class="text-sm font-semibold pb-6">Contacts</div>
          <ul class="text-xs space-y-4">
            <li class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ejdylan1029@gmail.com" 
            target="_blank">ejdylan1029@gmail.com</a>
            </li>
            <li>
              <a>(425) 381-9344</a>
            </li>
            <li class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700">
              <NuxtLink to="https://www.linkedin.com/in/elijah-johnson-27b82a232/" target="_blank">
                My LinkedIn
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Goals -->
        <div class="w-full text-center text-slate-400 md:w-1/5 md:text-left">
          <div class="text-sm font-semibold pb-6">Goals</div>
          <ul class="text-xs space-y-4">
            <li>
              <a>Career in software engineering</a>
            </li>
            <li>
              <a>Go full remote van-life</a>
            </li>
            <li>
              <a>Career in freelance web design</a>
            </li>
          </ul>
        </div>

        <!-- Projects -->
        <div class="w-full text-center text-slate-400 md:w-1/5 md:text-left">
          <div class="text-sm font-semibold pb-6">Projects</div>
          <ul class="text-xs space-y-4">
            <li>
              <a>C++ evolution simulator</a>
            </li>
            <li>
              <a>Freelance portfolio website</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div 
        class="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12"
      />
    </footer>
  </template>