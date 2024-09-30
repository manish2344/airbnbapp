import React from 'react';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';

const PropertyCard = ({ property }) => (
  <div className="relative">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
      <Image
        src={property.image}
        alt={property.location}
        layout="fill"
        objectFit="cover"
      />
      <button className="absolute top-2 right-2 text-white">
        <HeartIcon className="w-6 h-6" />
      </button>
      <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
        Guest favourite
      </div>
    </div>
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{property.location}</h3>
        <span className="flex items-center">
          ★ {property.rating}
        </span>
      </div>
      <p className="text-sm text-gray-500">{property.details}</p>
      <p className="text-sm text-gray-500">{property.date}</p>
      <p className="font-semibold mt-1">₹{property.price} night</p>
    </div>
  </div>
);

const PropertyListing = ({ properties }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListing;
