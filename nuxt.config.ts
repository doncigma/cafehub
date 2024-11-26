export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/image', '@nuxt/ui'],
    runtimeConfig: {
        public: {
            transLogoSrc: 'logos/CafeHub-logo-trans.png',
            noTextLogoSrc: 'logos/CafeHub-no-text.png'
        },
    }
})
