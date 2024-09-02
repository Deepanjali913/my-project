import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  const categories = [
    { name: 'Restaurants', image: 'restaurant.jpg' },
    { name: 'Cafes', image: 'cafe.jpg' },
    { name: 'Shops', image: 'shop.jpg' },
    { name: 'Gyms', image: 'gym.jpg' },
    { name: 'Salons', image: 'salon.jpg' },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Find and Review Local Businesses</h1>
        <Swiper spaceBetween={10} slidesPerView={3} loop={true}>
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Link to={`/categories/${category.name.toLowerCase()}`}>
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={`/images/${category.image}`} alt={category.name} className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-xl font-semibold">{category.name}</h2>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
