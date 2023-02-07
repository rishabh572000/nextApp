import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from '../../../styles/Slider/slider.module.css';
import slider1 from '../../../assest/slider1.jpg';
import slider2 from '../../../assest/slider2.jpg';
import slider3 from '../../../assest/slider3.jpg';

import { EffectFade, Navigation, Pagination } from "swiper";
import Image from "next/image";

export default function Slider() {
  return (
    <>
    <div className={styles.sliderSection}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <Image src={slider2} className={styles.image} alt='image'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider1} className={styles.image}  alt='image'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider3} className={styles.image} alt='image' />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
