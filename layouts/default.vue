<template>
    <div class="flex h-screen">
        <div class=" w-full   h-[100dvh] relative">

            <div class="absolute top-0 left-0 w-full z-50">
                <TopNav />
            </div>

            <slot />
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>