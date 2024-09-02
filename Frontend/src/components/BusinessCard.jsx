import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BusinessCard = ({ name, rating, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
          ))}
        </div>
        <Link to={`/review/${name.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 font-semibold">
          Review & Rate
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
