'use client'
import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  function handleClick() {
    imageInputRef.current.click();
  }
  return <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input type="file" ref={imageInputRef} id={name} accept="image/png, image/jpeg" name={name} className={classes.input} />
        <button onClick={handleClick} type="button" className={classes.button}>Pick Image</button>
      </div>
    </div>  
}
