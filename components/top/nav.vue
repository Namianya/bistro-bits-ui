<template>
    <div class="flex justify-between w-full px-4 py-2 backdrop-blur-sm ">
        <div class="flex gap-2 items-center">
            <NuxtLink
                to="food"
                v-if="$route.name == 'menu-id-details'"
                class="btn btn-square btn-sm btn-ghost hover:bg-red-500/10 hover:text-red-500"
            >
                <Icon
                    name="solar:arrow-left-broken"
                    class="text-xl"
                />
            </NuxtLink>
            <NuxtLink
                to="/"
                v-if="$route.name == 'menu-food'"
                class="btn btn-square btn-sm btn-ghost hover:bg-red-500/10 hover:text-red-500"
            >
                <Icon
                    name="solar:home-broken"
                    class="text-xl text-white"
                />
            </NuxtLink>
            <p class="text-orange-500 font-normal "><span class="text-lime-500 font-semibold ">Bistro</span>Bits</p>
        </div>
        <div class="space-x-2">
            <button class="btn btn-square btn-sm btn-ghost hover:bg-orange-500/10 hover:text-orange-500">
                <Icon
                    name="solar:user-broken"
                    class="text-xl"
                    :class="$route.name === 'index' ? 'text-white' : ''"
                />
            </button>
            <button class="btn btn-square btn-sm btn-ghost hover:bg-blue-500/10 hover:text-blue-500">
                <Icon
                    name="solar:share-line-duotone"
                    class="text-xl"
                    :class="$route.name === 'index' ? 'text-white' : ''"
                />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>