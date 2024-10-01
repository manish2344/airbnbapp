import React, { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    // Pass the search parameters to the parent component
    onSearch({ location, checkIn, checkOut, guests });
  };

  return (
    <div className="max-w-4xl mx-auto mt-7 mb-7">
      <div className="flex items-center bg-white rounded-full shadow-md">
        <div className="flex-1 p-2">
          <div className="text-xs font-bold">Where</div>
          <div className="flex items-center">
            <Search size={18} className="mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex-1 p-2 border-l border-gray-300">
          <div className="text-xs font-bold">Check in</div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-gray-400" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex-1 p-2 border-l border-gray-300">
          <div className="text-xs font-bold">Check out</div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-gray-400" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex-1 p-2 border-l border-gray-300">
          <div className="text-xs font-bold">Who</div>
          <div className="flex items-center">
            <Users size={18} className="mr-2 text-gray-400" />
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Add guests"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="p-3 ml-2 text-white bg-rose-500 rounded-full hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
