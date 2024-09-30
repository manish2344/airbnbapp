

// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [location, setLocation] = useState('');
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [guests, setGuests] = useState(1);

//   const handleSearch = () => {
//     onSearch({ location, checkIn, checkOut, guests }); // Pass search parameters to the parent component
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 rounded">
//       <input
//         type="text"
//         placeholder="Where are you going?"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         className="border p-2 rounded w-full md:w-1/4 mr-2"
//       />
//       <input
//         type="date"
//         value={checkIn}
//         onChange={(e) => setCheckIn(e.target.value)}
//         className="border p-2 rounded w-full md:w-1/4 mr-2"
//       />
//       <input
//         type="date"
//         value={checkOut}
//         onChange={(e) => setCheckOut(e.target.value)}
//         className="border p-2 rounded w-full md:w-1/4 mr-2"
//       />
//       <input
//         type="number"
//         min="1"
//         value={guests}
//         onChange={(e) => setGuests(e.target.value)}
//         className="border p-2 rounded w-full md:w-1/4 mr-2"
//         placeholder="Guests"
//       />
//       <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [location, setLocation] = useState('');
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [guests, setGuests] = useState(1);

//   const handleSearch = () => {
//     onSearch({ location, checkIn, checkOut, guests });
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow-md p-4 mb-4">
//       <input
//         type="text"
//         placeholder="Where are you going?"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <div className="flex flex-col md:flex-row">
//         <input
//           type="date"
//           value={checkIn}
//           onChange={(e) => setCheckIn(e.target.value)}
//           className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="date"
//           value={checkOut}
//           onChange={(e) => setCheckOut(e.target.value)}
//           className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <input
//         type="number"
//         min="1"
//         value={guests}
//         onChange={(e) => setGuests(e.target.value)}
//         className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Guests"
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-500 text-white rounded-lg p-2 md:w-1/5 hover:bg-blue-600 transition"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
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