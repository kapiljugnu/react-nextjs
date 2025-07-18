import Link from 'next/link';
import classes from './page.module.css';
import MealGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
  title: 'All meals',
  description: 'Browser the delicious meals shared by our vibrant community.'
}

async function Meals(){
  const meals = await getMeals();
  return <MealGrid meals={meals} />
}

export default function MealsPage() {
  return <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created{' '}
        <span className={classes.highlighted}>by you</span>
      </h1>
      <p>Choose your favourite receipe and cook it yourself. It is easy and fun!</p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share your favourite receipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
        <Meals />
      </Suspense>
    </main>
    </>
}
