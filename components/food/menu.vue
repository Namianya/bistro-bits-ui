<template>
    <div class="h-full flex flex-col overflow-scroll scrollbar-hide">
        <div>
            <section class="flex overflow-x-scroll lg:overflow-x-clip gap-4 scrollbar-hide pt-8 px-4">
                <div
                    class=" cursor-pointer"
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
        <div class="m-4 lg:overflow-x-scroll lg:scrollbar-hide">
            <p class="font-bold text-xl text-slate-700 dark:text-slate-200 mb-4">Breakfast</p>
            <div class="space-y-2">
                <FoodMenuCard />
                <FoodMenuCard />
                <FoodMenuCard />
                <FoodMenuCard />
                <FoodMenuCard />
                <FoodMenuCard />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    foodCartegories: {
        type: Array<{ img: string, categoryTitle: string }>,
        required: true
    }
})

</script>

<style scoped></style>