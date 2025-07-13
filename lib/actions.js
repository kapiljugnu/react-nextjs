'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// all the function in this file will be treated as server actions


// server action require async keyword and directive
// feature exist on react and this feature require framework like react to unlock
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if(isInvalidTextHelper(meal.title) ||
    isInvalidTextHelper(meal.summary) ||
    isInvalidTextHelper(meal.instructions) ||
    isInvalidTextHelper(meal.creator) ||
    isInvalidTextHelper(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0
  ) {
      // throw new Error('Invalid input');
      // or
      // return object
      return {
         message: 'Invalid input',
      } 
    }

  await saveMeal(meal);
  redirect('/meals');
}


function isInvalidTextHelper(text) {
  return !text || text.trim() === '';
}
