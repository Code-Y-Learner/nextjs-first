'use server';

import { saveMeals } from "@/lib/db_meals";

export async function shareMeal(formData) {
	const meal = {
		title: formData.get('title'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
	};

	await saveMeals(meal);
}
