import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/swiper-bundle.css';


function Hero() {

  const slides = [
    { id: 1, image: '/automobile.jpg' },
    { id: 2, image: '/laundry.jpg' },
    { id: 3, image: '/assets-and-props.png' },
  ];

  return (
     <section id="hero">
          <div className="md:flex flex-col items-center justify-center  text-white text-center px-4 md:px-0 h-[90vh] md:h-[110vh] py-8 md:py-16 hero hidden ">
          </div>
          <div className='md:hidden h-[52vh]'>
          <Swiper
          // install Swiper modules
          modules={[Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className='h-full'
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={`Slide ${slide.id}`} className='w-full h-full object-contain' />
            </SwiperSlide>
          ))}
        </Swiper>
          </div>
     </section>
  )
}

export default Hero