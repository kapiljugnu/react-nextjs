'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// all the function in this file will be treated as server actions


// server action require async keyword and directive
// feature exist on react and this feature require framework like react to unlock
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  await saveMeal(meal);
  redirect('/meals');
}
