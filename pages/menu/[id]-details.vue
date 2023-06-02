<template>
	<div class="h-screen w-full relative">
		<NuxtImg
			src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
			:alt="`Image of ${$route.params.id}`"
			class="h-1/3 w-full object-cover rounded-b-md"
		/>
		<div class=" absolute top-0 h-1/3 w-full bg-gradient-to-t from-black rounded-b-md "></div>
		<div class="  p-4">
			<div class="flex justify-between items-center">
				<p class="font-semibold text-lg"><span class="text-sm font-normal">KES</span> 1200</p>

				<div class="flex gap-2">
					<div class="text-center btn btn-ghost btn-sm hover:bg-transparent">
						<Icon
							name="solar:dislike-line-duotone"
							class=" w-6 h-6 cursor-pointer "
						/>
					</div>
					<div class="text-center btn btn-ghost btn-sm hover:bg-transparent">
						<Icon
							name="solar:heart-bold-duotone"
							class="text-red-500 w-6 h-6 cursor-pointer animate-pulse"
						/>
						<p class="text-xs text-gray-500">2k</p>
					</div>
				</div>

			</div>

			<p class="font-semibold text-2xl text-slate-600 dark:text-slate-400 ">{{ foodItem.name }}</p>
			<div
				v-for="tag in foodItem.tags"
				:key="tag"
				class="badge capitalize  text-xs mr-2 bg-lime-500/30 text-lime-800"
			>
				{{ tag }}
			</div>
			<p class="mt-6 text-sm text-gray-500 mb-3">
				<Icon name="solar:clock-circle-broken" /> 40 mins
			</p>

			<p>
				{{ foodItem.addedDetails }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">

const foodItem = ref({
	id: 8,
	name: "Ice Cream",
	price: 5,
	description: "A delicious ice cream",
	image:
		"https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	addedDetails:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
	category: "Dessert",
	tags: ["Ice Cream", "Dessert"],
	type: "Desert",
	likes: 0,
	isRecomedned: false,
})
</script>

<style scoped></style>
