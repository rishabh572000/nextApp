import React from 'react'
import styles from '../../../styles/Products/product.module.css'
import Image from 'next/image';
import productOne from '../../../assest/productOne.jpg';
import productTwo from '../../assest/productTwo.jpg';
import productThree from '../../assest/productThree.jpg';
import { FiHeart } from 'react-icons/fi';

export default function Product() {
return (
  <>
   <div className={styles.product}>
     <div className={styles.imageContainer}>
        <Image src={productOne} alt='' className={styles.image}/>
     </div>
    <div className={styles.heading}>
        <h3>Lorem, ipsum dolor</h3>
        <h1>$30</h1>
    </div>
    <div className={styles.details}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eveniet voluptate...</p>
    </div>
    <div className={styles.card}>
        <FiHeart className={styles.heart}/>
    <button name="submit" className={styles.button}>Add to Card</button>
    </div>
   </div>
  </>
)
}
