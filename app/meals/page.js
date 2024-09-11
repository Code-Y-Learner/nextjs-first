import Link from 'next/link';
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid';
import { getAllMeals } from '@/lib/db_meals';
import { Suspense } from 'react';

async function Meals() {
	const meals = await getAllMeals();

	return <MealsGrid meals={meals} />;
}

export default function MealsPage() {

	return (
	<>
		<header className={classes.header}>
			<h1>
				Delicious Meals, created <span className={classes.highlight}>by you</span>!
			</h1>
			<p>
				Choose your favorite meal and then prepare it yourself at home!
			</p>
			<p className={classes.cta}>
				<Link href="/meals/share">
					Share your own meal!
				</Link>
			</p>
		</header>
		<main className={classes.main}>
			<Suspense fallback={
				<p className={classes.loading}>
					Please wait a moment while we load the delicious meals.
				</p>
			}>
				<Meals />
			</Suspense>
		</main>
	</>);
}
