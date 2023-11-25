import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Slider({
  children,
  delay,
  effect,
  spaceBetween,
  slidesPerView,
  navigations,
  breakpoints,
}: any) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: delay || 3000,
          disableOnInteraction: false,
        }}
        effect={effect}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigations}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={breakpoints}
      >
        {children.map((child: any, i: number) => {
          return <SwiperSlide key={i}>{child}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
