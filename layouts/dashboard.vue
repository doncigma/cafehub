<template>
    <div class="flex flex-col min-h-screen">
        <UserHeader />
        <main class="flex-1">
            <slot />
        </main>
        <NavFooter />
    </div>
</template>