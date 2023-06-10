<template>
	<div class="h-screen">
		<FoodMenu
			:menu-items="menuItems"
			:food-cartegories="foodCartegories"
			:loading="pending"
		/>
	</div>
</template>

<script setup lang="ts">
import { APIFormart } from '~/types/foodType';
import { API_URL } from '~/variables/urls';

const foodCartegories: { img: string; categoryTitle: string }[] = [
	{
		img: "https://images.unsplash.com/photo-1568158879083-c42860933ed7",
		categoryTitle: "Salads",
	},
	{
		img: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1",
		categoryTitle: "Steaks",
	},
	{
		img:
			"https://images.unsplash.com/photo-1606307305578-9f4121dde6d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1485&q=80",
		categoryTitle: "Vegetarian",
	},
	{
		img: "https://images.unsplash.com/photo-1568158879083-c42860933ed7",
		categoryTitle: "Salads",
	},
	{
		img: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1",
		categoryTitle: "Steaks",
	},
	{
		img:
			"https://images.unsplash.com/photo-1606307305578-9f4121dde6d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1485&q=80",
		categoryTitle: "Vegetarian",
	},
];

const { data, pending, error } = await useFetch<APIFormart>(API_URL + '/menu_items', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
})

const menuItems = computed(() => {
	if (data.value) {
		return [data.value]
	}
	return []
})
</script>

<style scoped></style>
