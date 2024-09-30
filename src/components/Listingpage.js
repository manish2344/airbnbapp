
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// // Updated ListingCard component to display price
// const ListingCard = ({ image, title, host, status, price ,category}) => {
//   return (
//     <div className="border rounded-lg overflow-hidden shadow-lg">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold">{title}</h2>
//         <p className="text-gray-600">Host: {host}</p>
//         <p className="text-gray-600">Price: ${price}</p>
//         <p className="text-gray-600">{category}</p>
//         {/* <span
//           className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
//             status === 'Available Now'
//               ? 'bg-green-200 text-green-800'
//               : status === 'Coming Soon'
//               ? 'bg-yellow-200 text-yellow-800'
//               : 'bg-red-200 text-red-800'
//           }`}
//         >
//           {status}
//         </span> */}
//       </div>
//     </div>
//   );
// };

// function ListingPage({ selectedCategory }) {
//   const [listings, setListings] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const getToken = () => {
//       if (typeof window !== 'undefined') {
//         const storedToken = localStorage.getItem('accessToken');
//         console.log('Retrieved token:', storedToken);
//         return storedToken;
//       }
//       return null;
//     };

//     setToken(getToken());

//     const handleStorageChange = () => {
//       const currentToken = getToken();
//       if (currentToken !== token) {
//         setToken(currentToken);
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, [token]);

//   useEffect(() => {
//     const fetchListings = async () => {
//       if (!token) {
//         console.log('No token available yet, waiting...');
//         return;
//       }

//       try {
//         console.log('Fetching listings with token:', token);
//         const response = await fetch('http://localhost:8000/api/listings', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         console.log('Response status:', response.status);
//         console.log('Response headers:', response.headers);

//         if (!response.ok) {
//           const errorBody = await response.text();
//           console.error('Error response body:', errorBody);
//           throw new Error(`Failed to fetch listings: ${response.status} ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log('Listings API Response:', data);

//         if (Array.isArray(data)) {
//           setListings(data);
//         } else if (data.data && Array.isArray(data.data)) {
//           setListings(data.data);
//         } else {
//           console.error('Unexpected data structure:', data);
//           throw new Error('Unexpected data structure in API response');
//         }

//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error fetching listings:', err);
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };

//     fetchListings();
//   }, [token]);

//   const filteredListings = selectedCategory
//     ? listings.filter((listing) => listing.category === selectedCategory)
//     : listings;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Listings</h1>
//       {isLoading ? (
//         <div className="text-center">Loading...</div>
//       ) : error ? (
//         <div className="text-center text-red-500">Error: {error}</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredListings.length > 0 ? (
//             filteredListings.map((listing) => (
//               <Link href={`/listings/${listing.id}`} key={listing.id} legacyBehavior>
//                 <a>
//                   <ListingCard
//                     image={listing.image}
//                     title={listing.title}
//                     host={listing.host}
//                     status={listing.status}
//                     price={listing.price_per_night} // Pass the price to the ListingCard component
//                     category={listing.category} 
//                   />
//                 </a>
//               </Link>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-gray-500">
//               No listings available for this category
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ListingPage;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Hardcoded Images Data
const hardcodedImages = {
  1: 'https://images.unsplash.com/photo-1611095973515-9fe6f13a065b',
  2: 'https://images.unsplash.com/photo-1533042426-0d2656a75dba',
  3: 'https://images.unsplash.com/photo-1560067174-894c636e15b0',
  4: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  5: 'https://images.unsplash.com/photo-1568307847449-1fa2db09f1b3',
  6: 'https://images.unsplash.com/photo-1540418100513-993fcf83b14f',
  7: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
  8: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  9: 'https://images.unsplash.com/photo-1572314493468-b8fdd5d2354a',
};

// ListingCard Component
const ListingCard = ({ image, title, host, status, price, category }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">Host: {host}</p>
        <p className="text-gray-600">Price: ${price}</p>
        <p className="text-gray-600">{category}</p>
        {/* Optional Status Badge */}
        {/* <span
          className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
            status === 'Available Now'
              ? 'bg-green-200 text-green-800'
              : status === 'Coming Soon'
              ? 'bg-yellow-200 text-yellow-800'
              : 'bg-red-200 text-red-800'
          }`}
        >
          {status}
        </span> */}
      </div>
    </div>
  );
};

function ListingPage({ selectedCategory }) {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  // Fetch the token from localStorage
  useEffect(() => {
    const getToken = () => {
      if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('accessToken');
        return storedToken;
      }
      return null;
    };

    setToken(getToken());

    const handleStorageChange = () => {
      const currentToken = getToken();
      if (currentToken !== token) {
        setToken(currentToken);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [token]);

  // Fetch listings from the API
  useEffect(() => {
    const fetchListings = async () => {
      if (!token) {
        console.log('No token available yet, waiting...');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/api/listings', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch listings: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setListings(data);
        } else if (data.data && Array.isArray(data.data)) {
          setListings(data.data);
        } else {
          throw new Error('Unexpected data structure in API response');
        }

        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchListings();
  }, [token]);

  // Filter listings based on selected category
  const filteredListings = selectedCategory
    ? listings.filter((listing) => listing.category === selectedCategory)
    : listings;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Listings</h1>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <Link href={`/listings/${listing.id}`} key={listing.id} legacyBehavior>
                <a>
                  <ListingCard
                    image={hardcodedImages[listing.id]} // Use hardcoded image based on 
                    // image={listing.image}
                    title={listing.title}
                    host={listing.host}
                    status={listing.status}
                    price={listing.price_per_night} // Use the API price
                    category={listing.category} 
                  />
                </a>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No listings available for this category
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ListingPage;
