'use client';
import { useFormStatus } from 'react-dom';

export default function MealFormSubmit() {
  const status = useFormStatus(); // can only be used inside/child component of the html form element
  const { pending } = status;

  return <button disabled={pending} type="submit">{pending? 'Submitting...': 'Share Meal'}</button>
}
