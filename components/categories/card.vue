<template>
    <div class="flex flex-col gap-2 lg:w-28 w-20">

        <div class="avatar">
            <div class="w-20 lg:w-28 rounded">
                <NuxtImg
                    :src="img"
                    class="w-20 lg:w-28"
                />
            </div>
        </div>
        <p class="text-center text-sm capitalize text-white z-50 ">{{ categoryTitle }}</p>


    </div>
</template>

<script setup lang="ts">

defineProps({
    img: {
        type: String,
        required: true
    },
    categoryTitle: {
        type: String,
        required: true
    }
})

</script>

<style scoped></style>