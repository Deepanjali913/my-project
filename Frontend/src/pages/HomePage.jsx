import React from 'react';
import BusinessCard from '../components/BusinessCard';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const businesses = [
    { name: 'Joe\'s Cafe', rating: 4, image: '/images/cafe.jpg' },
    { name: 'Fitness World', rating: 5, image: '/images/gym.jpg' },
    { name: 'Restro Bar'    , rating:4, image: '/images/restaurant-a.jpg'},
    { name: 'Style Salon', rating: 3, image: '/images/salon.jpg' },
    { name: 'Stationary', rating: 3, image: '/images/stationary.jpg.jpg' },
    { name: 'general store', rating: 3, image: '/images/generalstore.jpg.jpg' },
  ];
  console.log(businesses);

  return (
    <>
      <Navbar />
      <Hero />
      <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map((business, index) => (
          <BusinessCard
            key={index}
            name={business.name}
            rating={business.rating}
            image={business.image}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default HomePage; 
