export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/icon', 'nuxt-rating'],
    runtimeConfig: {
        public: {
            transLogoSrc: 'logos/CafeHub-logo-trans.png',
            noTextLogoSrc: 'logos/CafeHub-no-text.png',
        },
    },
    components: true,
})