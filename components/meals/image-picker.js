'use client'
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();
  function handleClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if(!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file);
  }
  return <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
        {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && <Image src={pickedImage} fill alt="The user selected image" />}
        </div>
        <input onChange={handleImageChange} type="file" required ref={imageInputRef} id={name} accept="image/png, image/jpeg" name={name} className={classes.input} />
        <button onClick={handleClick} type="button" className={classes.button}>Pick Image</button>
      </div>
    </div>  
}
