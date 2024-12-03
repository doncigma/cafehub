<template>
    <div class="flex flex-col min-h-screen">
        <BareHeader />
        <main class="flex-1">
            <slot />
        </main>
        <NavFooter />
    </div>
</template>