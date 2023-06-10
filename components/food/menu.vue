<template>
    <div class="h-full flex flex-col overflow-scroll scrollbar-hide">
        <div class="pt-14 relative">
            <div class="absolute top-0 left-0 w-full h-full bg-black/50">
                <NuxtImg
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    class="w-full h-full object-cover"
                />
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black"></div>

            <section
                class="flex overflow-x-scroll lg:overflow-x-clip gap-4 scrollbar-hide pt-8 mb-6 px-4 md:px-4 lg:px-16 ">
                <div
                    class="cursor-pointer"
                    v-for="foodCartegory in foodCartegories"
                    :key="foodCartegory.img"
                >
                    <CategoriesCard
                        :img="foodCartegory.img"
                        :category-title="foodCartegory.categoryTitle"
                    />
                </div>
            </section>
        </div>
        <div class="m-4 lg:overflow-x-scroll lg:scrollbar-hide md:px-4 lg:px-16">
            <p class="font-bold text-xl text-slate-700 dark:text-slate-200 mb-4">
                Popular
            </p>

            <div
                v-if="menuItems.length"
                class="space-y-2"
            >
                <div
                    v-for="menuItem in menuItems"
                    :key="menuItem.data.id"
                >
                    <NuxtLink :to="`/menu/${menuItem.data.id}-details`">
                        <FoodMenuCard :food-item="menuItem.data" />
                    </NuxtLink>
                </div>
            </div>
            <div
                v-else
                class="flex h-full flex-col p-4 bg-white dark:bg-slate-900 rounded shadow-lg "
            >
                <Icon
                    name="solar:oven-mitts-broken"
                    class="text-red-500/50 w-12 h-12 mx-auto"
                />
                <p class="text-center">Menu Not Available</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { foodList } from '~/data/food';
import { APIFormart } from '~/types/foodType';
import { API_URL } from '~/variables/urls';

defineProps({
    foodCartegories: {
        type: Array<{ img: string, categoryTitle: string }>,
        required: true
    },
    menuItems: {
        type: Array<APIFormart>,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    }
})







</script>

<style scoped></style>
