<template>
    <div
        class="bg-white dark:bg-slate-900 rounded p-2  shadow hover:shadow-md duration-200 ease-in-out grid grid-cols-1 md:grid-cols-4 gap-4 group">
        <div class=" md:col-span-1 relative ">
            <NuxtImg
                src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                class="h-36 w-full md:w-40 rounded object-cover"
            />
            <div
                class="absolute top-0 left-0 w-full md:w-36 group-hover:from-black/70 bg-gradient-to-t h-36 duration-200 rounded ">

            </div>
            <div class="absolute bottom-2 left-2">
                <Icon
                    name="solar:medal-ribbons-star-bold-duotone"
                    class="text-yellow-500 w-6 h-6 cursor-pointer"
                />
            </div>
        </div>
        <div class="md:col-span-3 flex flex-col justify-between">
            <div class="mb-6">
                <p class="font-semibold text-lg">Lorem, ipsum dolor.</p>
                <div>
                    <p class="badge capitalize badge-primary text-xs">Best in town</p>
                </div>
                <p class="text-sm text-slate-500 truncate">Lorem ipsum dolor sit amet consectetur
                    adipisicing
                    elit. Libero ut laboriosam saepe placeat eos nesciunt corrupti, ipsa minus sapiente ullam</p>
            </div>
            <div class=" flex justify-end">

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

</script>

<style scoped></style>