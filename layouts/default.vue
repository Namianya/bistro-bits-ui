<template>
    <div class="flex h-screen">
        <div class=" w-full lg:max-w-2xl  h-screen">
            <!-- <div class="absolute top-0 left-0  ">

                <div class="h-screen w-screen lg:w-full bg-red-500 ">
                    <NuxtImg
                        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
                        class="w-full  h-screen object-fill "
                    />
                </div>
            </div> -->
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