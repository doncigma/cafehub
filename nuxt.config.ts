// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
    runtimeConfig: {
        public: {
            transLogoSrc: 'logos/CafeHub-logo-trans.png', 
            noTextLogoSrc: 'logos/CafeHub-no-text.png'
        },
    },
})