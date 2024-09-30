// import React from 'react'

// function Myfavorites() {
//   return (
//     <div>my-favorites</div>
//   )
// }

// export default Myfavorites

import React from 'react';
import { Heart } from 'lucide-react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css'; 
const TripCard = ({ destination, dates, price, image }) => (
  <div className="border rounded-lg overflow-hidden shadow-sm">
    <div className="relative">
      {image ? (
        <img src={image} alt={destination} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image</span>
        </div>
      )}
      <button className="absolute top-2 right-2 text-white">
        <Heart size={24} />
      </button>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">{destination}</h3>
      <p className="text-sm text-gray-600">{dates}</p>
      <p className="mt-2 font-bold">₹ {price}</p>
      <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
        Cancel reservation
      </button>
    </div>
  </div>
);

const Myfavorites = () => {
  const trips = [
    { destination: 'Africa, Angola', dates: 'Sep 29, 2024 - Sep 29, 2024', price: '1', image: '/path/to/angola-image.jpg' },
    { destination: 'Americas, Argentina', dates: 'Sep 29, 2024 - Sep 29, 2024', price: '5', image: '/path/to/argentina-image.jpg' },
    { destination: 'Africa, Angola', dates: 'Sep 29, 2024 - Sep 29, 2024', price: '1', image: '/path/to/angola-image.jpg' },
    { destination: 'Africa, South Africa', dates: 'Sep 29, 2024 - Sep 29, 2024', price: '34000', image: '/path/to/southafrica-image.jpg' },
    { destination: 'Americas, Argentina', dates: 'Sep 29, 2024 - Sep 29, 2024', price: '5', image: '/path/to/argentina-image.jpg' },
  ];

  return (
          <>
      <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Trips</h1>
      <p className="text-gray-600 mb-6">Where you've been and where you're going</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </div>
        <Footer/>
      </>
  );
};

export default Myfavorites;