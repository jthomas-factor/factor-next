import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

const Industries = () => {
  const slides = [
    { src: '/industries/transportation.png' },
    { src: '/industries/railroad.jpg' },
    { src: '/industries/chemical.jpg' },
    { src: '/industries/government.jpg' },
  ];

  return (
    <Swiper className="bg-white shadow w-[625px] h-[360px]">
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.src}
            alt="Industry image"
            fill
            className="object-contain"
            sizes="630px"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Industries;
