import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/Products/featureBrand.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import imageOne from '../../../assest/ttfashion.png'
import imageTwo from '../../../assest/addida.png'
import imageThree from '../../../assest/fashion.png'
import imageFour from '../../../assest/ishtaa.png'

export default function FeatureBrand() {
  return (
    <>
    <div className={styles.heading}>
      <h2>Tranding Brand</h2>
    </div>
    <div className={styles.FeatureBrand}>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}><Image src={imageOne} alt='image' className={styles.image} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Image src={imageTwo} alt='image' className={styles.image} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Image src={imageThree} alt='image' className={styles.image} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Image src={imageFour} alt='image' className={styles.image} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Image src={imageOne} alt='image' className={styles.image} /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
