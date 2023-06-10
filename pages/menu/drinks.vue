<template>
	<div class="h-screen">
		<FoodMenu
			:menu-items="[]"
			:food-cartegories="foodCartegories"
		/>
	</div>
</template>

<script setup lang="ts">
const foodCartegories: { img: string; categoryTitle: string }[] = [
	{
		img: "https://images.unsplash.com/photo-1568158879083-c42860933ed7",
		categoryTitle: "Cocktails",
	},
	{
		img: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1",
		categoryTitle: "Wines",
	},
	{
		img:
			"https://images.unsplash.com/photo-1606307305578-9f4121dde6d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1485&q=80",
		categoryTitle: "Beers",
	},
	{
		img: "https://images.unsplash.com/photo-1568158879083-c42860933ed7",
		categoryTitle: "Fruit Juices",
	},
];
</script>

<style scoped></style>
