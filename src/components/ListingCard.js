import React from 'react';

const ListingCard = ({ image, title, host, status }) => {
  return (
    <div className="border border-gray-200 rounded-md shadow-sm p-4 bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">Hosted by: {host}</p>
        <span className={`text-sm ${status === 'Available Now' ? 'text-green-500' : 'text-red-500'}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default ListingCard;
