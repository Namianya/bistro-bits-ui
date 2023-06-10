<template>
    <div
        class="bg-white dark:bg-slate-900 rounded p-2 shadow hover:shadow-md duration-200 ease-in-out grid grid-cols-1 md:grid-cols-4 gap-4 group">
        <div class="md:col-span-1 relative">
            <NuxtImg
                :src="foodItem.attributes.photo_url"
                class="h-36 w-full  rounded object-cover"
            />
            <div class="absolute top-0 left-0 w-full from-black/70 bg-gradient-to-t h-36 duration-200 rounded">
            </div>
            <div
                v-if="true"
                class="absolute bottom-2 left-2"
            >
                <Icon
                    name="solar:medal-ribbons-star-bold-duotone"
                    class="text-yellow-500 w-6 h-6 cursor-pointer"
                />
            </div>
        </div>
        <div class="md:col-span-3 flex flex-col justify-between">
            <div class="mb-6">
                <p class="font-semibold text-lg capitalize">{{ foodItem.attributes.title }}</p>
                <div class="flex space-x-2">
                    <p
                        v-for="tag in foodItem.attributes.tags"
                        :key="tag"
                        class="badge capitalize bg-lime-500/30 text-lime-800 text-xs"
                    >
                        {{ tag }}
                    </p>
                </div>

                <p class="text-sm text-slate-500 truncate">
                    {{ foodItem.attributes.description }}
                </p>
            </div>
            <div class="flex justify-between">
                <p class="font-semibold text-lg"><span class="text-sm font-normal">KES</span> {{ 0.00 }} </p>
                <div class="text-center">
                    <Icon
                        name="solar:heart-line-duotone"
                        class="text-red-500 w-6 h-6 cursor-pointer animate-pulse"
                    />
                    <p class="text-xs text-gray-500">2k</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { APIFormart, FoodType } from "~/types/foodType";
import { MenuItemType } from "~/types/menuItemType";
defineProps({
    foodItem: {
        type: Object as PropType<FoodType>,
        required: true,
    },
});
</script>

<style scoped></style>
