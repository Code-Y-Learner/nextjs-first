import classes from './loading.module.css'


export default function MealsLoadingPage() {
	return (
		<>
			<header>
				<h1 className={classes.loading}>
					Loading...
				</h1>
			</header>
			<main>
				<p className={classes.loading}>
					Please wait a moment while we load the delicious meals.
				</p>
			</main>
		</>
	);
}
