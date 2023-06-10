<template>
	<div class="h-screen text-center bg-slate-100 relative">
		<div
			class="absolute top-0 left-0 h-screen w-full bg-[url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] lg:bg-[url('https://images.unsplash.com/photo-1452967712862-0cca1839ff27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] object-fill bg-cover">
		</div>

		<div class="absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-black/30"></div>
		<div class="relative top-0 left-0">
			<div class="flex flex-col justify-between items-center h-screen">

				<div class="mt-28">
					<p class="text-orange-500 font-bold text-2xl lg:text-3xl mb-4"><span
							class="text-lime-500">Bistro</span>Bits
					</p>
					<p class="font-medium text-2xl text-white  max-w-md">
						Creating Memories, One <span class="text-lime-500">Bite</span> at a <span
							class="text-orange-500">Time</span>
					</p>
				</div>
				<div class="flex justify-center gap-4">
					<!-- <p class="text-orange-500">hdshjsd</p> -->
					<NuxtLink
						v-for="menuCategory in menuCategories"
						class="btn backdrop-blur-sm bg-slate-950/50 duration-200 ease-in-out"
						:class="`text-${menuCategory.color} hover:bg-${menuCategory.color}/30`"
						:key="menuCategory.name"
						:to="menuCategory.link"
					>
						<Icon
							:name="menuCategory.icon"
							class="text-lg"
						/>
						<p class="hidden sm:block">{{ menuCategory.name }}</p>
					</NuxtLink>
				</div>
				<div>
					<div class="mb-4 space-x-4">
						<button
							class="btn btn-square btn-sm btn-ghost"
							v-for="socialBtn in socialBtns"
							:key="socialBtn.icon"
						>
							<Icon
								:name="socialBtn.icon"
								class="text-2xl"
							/>
						</button>
					</div>
					<p class="text-orange-500 text-sm"><span class="text-lime-500">Bistro</span> Bits</p>
				</div>
			</div>
		</div>


	</div>
</template>

<script setup lang="ts">
const menuCategories: { name: string; icon: string; color: string; link: string }[] = [
	{
		name: "Food",
		icon: "solar:chef-hat-minimalistic-line-duotone",
		color: "red-500",
		link: "menu/food",
	},
	{
		name: "Drinks",
		icon: "solar:wineglass-triangle-broken",
		color: "lime-500",
		link: "menu/drinks",
	},
	{
		name: "Deserts",
		icon: "solar:donut-bitten-line-duotone",
		color: "orange-500",
		link: "menu/desserts",
	},
];

const socialBtns: { icon: string; color: string }[] = [
	{
		icon: "logos:twitter",
		color: "blue-500",
	},
	{
		icon: "logos:instagram-icon",
		color: "pink-500",
	},
	{
		icon: "logos:facebook",
		color: "blue-500",
	},
];
</script>

<style scoped></style>
