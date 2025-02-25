import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const ImageSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Fetch random images from Unsplash API (or any other dynamic source)
    fetch('https://api.unsplash.com/photos/random?count=5&query=nature&client_id=i3MUyw4N979saiQK5VBxN0FIbajZZ627vLy2Pf2dgQE')
      .then(response => response.json())
      .then(data => setSlides(data.map(photo => photo.urls.full)))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="absolute inset-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img 
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-white text-center">Loading images...</p>
        )}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
