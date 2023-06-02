<template>
    <div class="flex h-screen">
        <div class=" w-full lg:max-w-2xl  h-screen relative">

            <div class="absolute top-0 left-0 w-full z-50">
                <TopNav />
            </div>

            <slot />
        </div>
        <div class="hidden lg:flex flex-auto  h-screen  justify-center items-center">
            My Cafe
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>