<script setup>
    const nuxtApp = useNuxtApp();
    const show = ref(false);

    addRouteMiddleware('global-loader', () => show.value = true, { global: true })
    nuxtApp.hook('page:finish', () => show.value = false)
</script>

<template>
    <div v-show="show">
        Loading...
    </div>
</template>