
// "use client"; // Add this line at the top

// import React, { useState } from 'react';
// import {
//   FaMountain, FaSwimmer, FaHome, FaWater, FaTree, FaSnowflake,
//   FaUmbrellaBeach, FaWineGlassAlt, FaLandmark, FaHotel, FaCity,
//   FaCaravan, FaFire, FaFish
// } from 'react-icons/fa';
// import { GiIsland, GiFarmTractor, GiWoodCabin } from 'react-icons/gi';
// import { BsHouseDoor, BsFillHouseHeartFill } from 'react-icons/bs';
// import { MdOutlinePool } from 'react-icons/md';
// import PropertyListing from './PropertyListing'; // Import PropertyListing component

// // Category data with icons
// const categoryData = [
//   { name: 'Icons', icon: FaWineGlassAlt },
//   { name: 'Farms', icon: GiFarmTractor },
//   { name: 'Amazing views', icon: FaMountain },
//   { name: 'Amazing pools', icon: MdOutlinePool },
//   { name: 'Cabins', icon: GiWoodCabin },
//   { name: 'Lake', icon: FaWater },
//   { name: 'Beachfront', icon: FaUmbrellaBeach },
//   { name: 'OMG!', icon: FaFire },
//   { name: 'Countryside', icon: FaTree },
//   { name: 'Rooms', icon: BsHouseDoor },
//   { name: 'Lakefront', icon: FaFish },
//   { name: 'Historical homes', icon: FaLandmark },
//   { name: 'Islands', icon: GiIsland },
//   { name: 'Tiny homes', icon: BsFillHouseHeartFill },
// ];

// // Property data for each category
// const categoryProperties = {
//   'Icons': [
//     {
//       id: 1,
//       location: 'Iconic Villa',
//       details: 'Unique experience in the city',
//       date: '10-15 Oct',
//       price: '5,000',
//       rating: 4.9,
//       image: 'https://images.unsplash.com/photo-1602066700500-d0d4e573dbbc'
//     },
//   ],
//   'Farms': [
//     {
//       id: 2,
//       location: 'Farm Stay',
//       details: 'Experience farm life',
//       date: '20-25 Oct',
//       price: '3,000',
//       rating: 4.5,
//       image: 'https://images.unsplash.com/photo-1542595053-16d07c13e0c2'
//     },
//   ],
//   'Amazing views': [
//     {
//       id: 3,
//       location: 'Hejamadi, India',
//       details: 'Sasihithlu Beach',
//       date: '17-22 Nov',
//       price: '3,993',
//       rating: 4.9,
//       image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df'
//     },
//   ],
//   'Amazing pools': [
//     {
//       id: 4,
//       location: 'Pool Paradise',
//       details: 'Stunning pool views',
//       date: '15-20 Sep',
//       price: '7,000',
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1572276623601-3fbd2ff8d55f'
//     },
//   ],
//   'Cabins': [
//     {
//       id: 5,
//       location: 'Cozy Cabin',
//       details: 'A secluded cabin in the woods',
//       date: '12-18 Aug',
//       price: '4,200',
//       rating: 4.7,
//       image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
//     },
//   ],
//   // Add other categories similarly...
// };

// const CategoryList = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
//   const [properties, setProperties] = useState([]); // State for properties to display

//   const handleCategoryClick = (categoryName) => {
//     setSelectedCategory(categoryName); // Update state with selected category
//     setProperties(categoryProperties[categoryName] || []); // Update properties based on selected category
//   };

//   return (
//     <div>
//       {/* Category List */}
//       <div className="flex space-x-4 overflow-x-auto py-4">
//         {categoryData.map((category) => (
//           <button
//             key={category.name}
//             onClick={() => handleCategoryClick(category.name)} // Handle click event
//             className={`flex flex-col items-center p-2 rounded-md ${selectedCategory === category.name ? 'bg-gray-200' : ''} transition duration-300`}
//           >
//             {/* Render the category icon */}
//             <category.icon className="w-6 h-6 text-gray-500 mb-1" />
//             <span className="text-xs">{category.name}</span>
//           </button>
//         ))}
//       </div>

//       {/* Display selected category data */}
//       {selectedCategory && properties.length > 0 && (
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold mb-2">
//             {selectedCategory} Properties
//           </h3>
//           <PropertyListing properties={properties} /> {/* Pass properties to PropertyListing */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryList;
  

// "use client"; // Add this line at the top

// import React, { useState } from 'react';
// import {
//   FaMountain, FaSwimmer, FaHome, FaWater, FaTree, FaSnowflake,
//   FaUmbrellaBeach, FaWineGlassAlt, FaLandmark, FaHotel, FaCity,
//   FaCaravan, FaFire, FaFish
// } from 'react-icons/fa';
// import { GiIsland, GiFarmTractor, GiWoodCabin } from 'react-icons/gi';
// import { BsHouseDoor, BsFillHouseHeartFill } from 'react-icons/bs';
// import { MdOutlinePool } from 'react-icons/md';
// import ListingCard from './ListingCard'; // Import ListingCard component
// import PropertyDetail from './PropertyDetail'; // Import PropertyDetail component
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Link from 'next/link';
// // Category data with icons
// const categoryData = [
//   { name: 'Icons', icon: FaWineGlassAlt },
//   { name: 'Farms', icon: GiFarmTractor },
//   { name: 'Amazing views', icon: FaMountain },
//   { name: 'Amazing pools', icon: MdOutlinePool },
//   { name: 'Cabins', icon: GiWoodCabin },
//   { name: 'Lake', icon: FaWater },
//   { name: 'Beachfront', icon: FaUmbrellaBeach },
//   { name: 'OMG!', icon: FaFire },
//   { name: 'Countryside', icon: FaTree },
//   { name: 'Rooms', icon: BsHouseDoor },
//   { name: 'Lakefront', icon: FaFish },
//   { name: 'Historical homes', icon: FaLandmark },
//   { name: 'Islands', icon: GiIsland },
//   { name: 'Tiny homes', icon: BsFillHouseHeartFill },
// ];

// // Property data for each category
// const categoryProperties = {
//     'Icons': [
//       {
//         id: 1,
//         location: 'Iconic Villa',
//         details: 'Unique experience in the city',
//         date: '10-15 Oct',
//         price: '5,000',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1602066700500-d0d4e573dbbc',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Modern Apartment',
//         details: 'A stylish stay in the city center',
//         date: '05-10 Nov',
//         price: '4,200',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1552083656-bb2302e1ff1d',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Luxury Penthouse',
//         details: 'Spectacular views of the skyline',
//         date: '01-07 Dec',
//         price: '6,500',
//         rating: 5.0,
//         image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
//         host: 'Host 3',
//         status: 'Coming Soon',
//       },
//     ],
//     'Farms': [
//         {
//             id: 1,
//             location: 'The White House',
//             details: 'Iconic residence of the President of the United States',
//             date: '06-11 Dec',
//             price: '10,000',
//             rating: 4.9,
//             image: 'https://images.unsplash.com/photo-1569075243892-3b5e52c4a9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwOXx8ZmFtb3VzJTIwaG91c2V8ZW58MHx8fHwxNjA4NzA4NDU2&ixlib=rb-1.2.1&q=80&w=400',
//             host: 'Host 1',
//             status: 'Available Now',
//           },
//           {
//             id: 2,
//             location: 'The Taj Mahal',
//             details: 'A beautiful mausoleum in India',
//             date: '25-30 Nov',
//             price: '7,500',
//             rating: 5.0,
//             image: 'https://images.unsplash.com/photo-1552929091-e450e646cb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRhaiUyMG1haGFsfGVufDB8fHx8MTYwODcwODQ2MQ&ixlib=rb-1.2.1&q=80&w=400',
//             host: 'Host 2',
//             status: 'Available Now',
//           },
//           {
//             id: 3,
//             location: 'Eiffel Tower',
//             details: 'Iconic symbol of Paris',
//             date: '01-05 Jan',
//             price: '15,000',
//             rating: 4.8,
//             image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDB8fGVpZmZlbCUyMHRvd2VyfGVufDB8fHx8MTYwODcwODQ2Ng&ixlib=rb-1.2.1&q=80&w=400',
//             host: 'Host 3',
//             status: 'Available Now',
//           },
//     ],
//     'Amazing views': [
//       {
//         id: 1,
//         location: 'Hejamadi, India',
//         details: 'Sasihithlu Beach',
//         date: '17-22 Nov',
//         price: '3,993',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Mountain View Cabin',
//         details: 'Stunning views of the mountains',
//         date: '12-18 Oct',
//         price: '4,500',
//         rating: 5.0,
//         image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Oceanfront Villa',
//         details: 'Breathtaking ocean views',
//         date: '25-30 Nov',
//         price: '8,000',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1499722600428-8d75a82f7c84',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Amazing pools':[
//         {
//           id: 1,
//           location: 'Pool Paradise',
//           details: 'Stunning pool views',
//           date: '15-20 Sep',
//           price: '7,000',
//           rating: 4.8,
//           image: 'https://images.unsplash.com/photo-1572276623601-3fbd2ff8d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwb29sJTIwcGFyYWRpc2V8ZW58MHx8fHwxNjA4NzA4NDU5&ixlib=rb-1.2.1&q=80&w=400',
//           host: 'Host 1',
//           status: 'Available Now',
//         },
//         {
//           id: 2,
//           location: 'Luxury Pool Villa',
//           details: 'Private villa with a stunning pool',
//           date: '10-15 Oct',
//           price: '10,000',
//           rating: 4.9,
//           image: 'https://images.unsplash.com/photo-1568605111625-32cbb1a7f8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDB8fGx1eHVyeSUyMHBvb2wlMjB2aWxsYXxlbnwwfHx8fDE2MDg3MDg0NjA&ixlib=rb-1.2.1&q=80&w=400',
//           host: 'Host 2',
//           status: 'Available Now',
//         },
//         {
//           id: 3,
//           location: 'Infinity Pool Resort',
//           details: 'Experience infinity pool views',
//           date: '20-25 Nov',
//           price: '9,500',
//           rating: 5.0,
//           image: 'https://images.unsplash.com/photo-1581691018738-28e49dc429a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxpbmlmaXR5JTIwcG9vbCUyMHJlc29ydCUyMHZpbGxhJTIwYmFzZWZpbGwlMjBmb2xsaWNpb3xlbnwwfHx8fDE2MDg3MDg0NjQ&ixlib=rb-1.2.1&q=80&w=400',
//           host: 'Host 3',
//           status: 'Available Now',
//         },
//       ],
//     'Cabins': [
//       {
//         id: 1,
//         location: 'Cozy Cabin',
//         details: 'A secluded cabin in the woods',
//         date: '12-18 Aug',
//         price: '4,200',
//         rating: 4.7,
//         image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Lake View Cabin',
//         details: 'A cabin with beautiful lake views',
//         date: '05-10 Sep',
//         price: '3,500',
//         rating: 4.6,
//         image: 'https://images.unsplash.com/photo-1507121051836-b8ec1a1b7884',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Mountain Cabin Retreat',
//         details: 'Relax in a cozy mountain cabin',
//         date: '18-25 Oct',
//         price: '5,000',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1519651161318-5a8931c5a21c',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Lake': [
//       {
//         id: 1,
//         location: 'Lakefront Lodge',
//         details: 'Charming lodge by the lake',
//         date: '10-15 Nov',
//         price: '3,900',
//         rating: 4.6,
//         image: 'https://images.unsplash.com/photo-1522151610593-cd0e6e3bb0db',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Serene Lake House',
//         details: 'Peaceful stay by the water',
//         date: '05-10 Oct',
//         price: '4,500',
//         rating: 4.7,
//         image: 'https://images.unsplash.com/photo-1518744941224-64b30f6e748b',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Luxury Lake Retreat',
//         details: 'Luxury accommodation by the lake',
//         date: '15-20 Dec',
//         price: '6,000',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1555019786-4e4b0673b97e',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Beachfront': [
//       {
//         id: 1,
//         location: 'Beachfront Paradise',
//         details: 'Luxury stay right on the beach',
//         date: '12-18 Jul',
//         price: '8,500',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1511174505292-3f3f5429f16d',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Tropical Beach House',
//         details: 'Experience the tropics',
//         date: '20-25 Aug',
//         price: '7,000',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1478804994890-dbf340637a9f',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Oceanfront Villa',
//         details: 'Stunning views and private beach access',
//         date: '15-20 Sep',
//         price: '12,000',
//         rating: 5.0,
//         image: 'https://images.unsplash.com/photo-1576106634965-3aa84e30cbfa',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'OMG!': [
//       {
//         id: 1,
//         location: 'Unique Experience Home',
//         details: 'An unforgettable stay',
//         date: '01-05 Oct',
//         price: '10,000',
//         rating: 5.0,
//         image: 'https://images.unsplash.com/photo-1546904851-9c3d87ac896b',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Extravagant Mansion',
//         details: 'Live like royalty',
//         date: '10-15 Nov',
//         price: '20,000',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1523506007591-7f5b7a63878d',
//         host: 'Host 2',
//         status: 'Available Now',
//         },
//       {
//         id: 3,
//         location: 'Incredible Glass House',
//         details: 'A masterpiece of architecture',
//         date: '05-10 Dec',
//         price: '15,000',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1506722675981-9aa4f21aa6a5',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Countryside': [
//       {
//         id: 1,
//         location: 'Countryside Cottage',
//         details: 'Charming stay in the countryside',
//         date: '12-18 Sep',
//         price: '2,500',
//         rating: 4.6,
//         image: 'https://images.unsplash.com/photo-1471360805735-03a1b6fd29d0',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Rural Retreat',
//         details: 'Relax in nature',
//         date: '05-10 Oct',
//         price: '3,000',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1546825321-e4e9079c5ef0',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Farmhouse Getaway',
//         details: 'Peaceful countryside experience',
//         date: '20-25 Nov',
//         price: '3,800',
//         rating: 4.7,
//         image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Rooms': [
//       {
//         id: 1,
//         location: 'Cozy Room in City Center',
//         details: 'A comfy room with a view',
//         date: '12-18 Oct',
//         price: '2,000',
//         rating: 4.5,
//         image: 'https://images.unsplash.com/photo-1541827535863-c48d0ec2d67b',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Private Room in Villa',
//         details: 'Stay in a luxury villa',
//         date: '10-15 Nov',
//         price: '3,200',
//         rating: 4.7,
//         image: 'https://images.unsplash.com/photo-1518606737473-7ee2162e16ab',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Charming Room with Balcony',
//         details: 'Enjoy the balcony view',
//         date: '05-10 Dec',
//         price: '2,800',
//         rating: 4.6,
//         image: 'https://images.unsplash.com/photo-1598294158583-9f4c3f95f129',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Lakefront': [
//       {
//         id: 1,
//         location: 'Lakefront Home',
//         details: 'Stunning views of the lake',
//         date: '15-20 Oct',
//         price: '4,500',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1518790937033-1b7a6b34d73f',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Secluded Lake Retreat',
//         details: 'Experience tranquility by the lake',
//         date: '10-15 Nov',
//         price: '5,000',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1560780341-7d62f0cbd8fc',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Lakefront Villa',
//         details: 'Luxury stay with private lake access',
//         date: '01-07 Dec',
//         price: '8,000',
//         rating: 5.0,
//         image: 'https://images.unsplash.com/photo-1562652920-4cfd909dc8f5',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Historical homes': [
//       {
//         id: 1,
//         location: 'Historical Castle Stay',
//         details: 'Stay in a castle rich in history',
//         date: '20-25 Oct',
//         price: '12,000',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1506755540731-2d1dff4eab32',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Victorian Home',
//         details: 'Beautiful Victorian style home',
//         date: '15-20 Nov',
//         price: '8,000',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1580781810077-67a3a1f54093',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Colonial House',
//         details: 'Stay in a beautifully preserved colonial house',
//         date: '10-15 Dec',
//         price: '7,500',
//         rating: 4.7,
//         image: 'https://images.unsplash.com/photo-1541191416745-b6c3a6ff4764',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Islands': [
//       {
//         id: 1,
//         location: 'Island Getaway',
//         details: 'Relax on a beautiful island',
//         date: '12-18 Sep',
//         price: '10,000',
//         rating: 5.0,
//         image: 'https://images.unsplash.com/photo-1587367263516-728b29d7f568',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Tropical Island Villa',
//         details: 'Luxury stay on a tropical island',
//         date: '20-25 Oct',
//         price: '15,000',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1541162394391-96e5d90b2a7a',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Island Paradise Retreat',
//         details: 'A peaceful retreat on an island',
//         date: '05-10 Nov',
//         price: '12,000',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1556731918-0c3b7e9c1546',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//     'Tiny homes': [
//       {
//         id: 1,
//         location: 'Tiny House on Wheels',
//         details: 'Adventure awaits in this tiny house',
//         date: '01-07 Oct',
//         price: '2,500',
//         rating: 4.6,
//         image: 'https://images.unsplash.com/photo-1567461830549-f0b1f9c1e84d',
//         host: 'Host 1',
//         status: 'Available Now',
//       },
//       {
//         id: 2,
//         location: 'Charming Tiny Cabin',
//         details: 'A cozy escape in nature',
//         date: '10-15 Nov',
//         price: '3,200',
//         rating: 4.7,
//         image: 'https://images.unsplash.com/photo-1515165994547-672c6329280c',
//         host: 'Host 2',
//         status: 'Available Now',
//       },
//       {
//         id: 3,
//         location: 'Modern Tiny Home',
//         details: 'Experience minimalism in this modern tiny home',
//         date: '20-25 Dec',
//         price: '3,800',
//         rating: 4.8,
//         image: 'https://images.unsplash.com/photo-1552923093-132cd46c68cb',
//         host: 'Host 3',
//         status: 'Available Now',
//       },
//     ],
//   };

// const CategoryList = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
//   const [properties, setProperties] = useState([]); // State for properties to display

//   const handleCategoryClick = (categoryName) => {
//     setSelectedCategory(categoryName); // Update state with selected category
//     setProperties(categoryProperties[categoryName] || []); // Update properties based on selected category
//   };

//   return (
//     <div>
//       {/* Category List */}
//       <div className="flex space-x-4 overflow-x-auto py-4">
//         {categoryData.map((category) => (
//           <button
//             key={category.name}
//             onClick={() => handleCategoryClick(category.name)} // Handle click event
//             className={`flex flex-col items-center p-2 rounded-md ${selectedCategory === category.name ? 'bg-gray-200' : ''} transition duration-300`}
//           >
//             {/* Render the category icon */}
//             <category.icon className="w-6 h-6 text-gray-500 mb-1" />
//             <span className="text-xs">{category.name}</span>
//           </button>
//         ))}
//       </div>

//       {/* Display selected category data */}
//       {selectedCategory && properties.length > 0 && (
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold mb-2">
//             {selectedCategory} Properties
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//           {properties.map(property => (
      
          
//             <ListingCard 
//               image={property.image} 
//               title={property.location}
//               host={property.host}
//               status={property.status}
//             />
       
      
//       ))}
//           </div>
         
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryList;

// import { useState } from 'react';
// import {
//   StarIcon,
//   GlobeAltIcon,
//   HomeIcon,
//   BuildingOfficeIcon,
//   Squares2X2Icon,
//   SparklesIcon,
//   HeartIcon,
//   AcademicCapIcon,
//   GiftIcon,
//   SunIcon,
//   PuzzlePieceIcon,
//   CloudIcon,
//   CakeIcon,
//   PhotoIcon,
// } from '@heroicons/react/24/outline'; // Make sure you use correct Heroicons v2 imports

// import ListingPage from './Listingpage'; // Import the listing page component

// // The icons list with categories
// const categories = [
//   { id: 'icons', icon: <StarIcon className="h-8 w-8" />, label: 'Icons' },
//   { id: 'top', icon: <GlobeAltIcon className="h-8 w-8" />, label: 'Top of the world' },
//   { id: 'lakefront', icon: <HomeIcon className="h-8 w-8" />, label: 'Lakefront' },
//   { id: 'caves', icon: <BuildingOfficeIcon className="h-8 w-8" />, label: 'Caves' },
//   { id: 'surfing', icon: <Squares2X2Icon className="h-8 w-8" />, label: 'Surfing' },
//   { id: 'farms', icon: <SparklesIcon className="h-8 w-8" />, label: 'Farms' },
//   { id: 'views', icon: <HeartIcon className="h-8 w-8" />, label: 'Amazing views' },
//   { id: 'pools', icon: <AcademicCapIcon className="h-8 w-8" />, label: 'Amazing pools' },
//   { id: 'omg', icon: <GiftIcon className="h-8 w-8" />, label: 'OMG!' },
//   { id: 'luxe', icon: <SunIcon className="h-8 w-8" />, label: 'Luxe' },
//   { id: 'castles', icon: <PuzzlePieceIcon className="h-8 w-8" />, label: 'Castles' },
//   { id: 'beachfront', icon: <CloudIcon className="h-8 w-8" />, label: 'Beachfront' },
//   { id: 'cabins', icon: <CakeIcon className="h-8 w-8" />, label: 'Cabins' },
//   { id: 'rooms', icon: <PhotoIcon className="h-8 w-8" />, label: 'Rooms' },
// ];

// const IconNav = ({ onCategorySelect }) => {
//   return (
//     <div className="flex space-x-6 px-10 py-5 overflow-x-auto bg-white border border-gray-200 shadow rounded-md">
//       {categories.map((item) => (
//         <div
//           key={item.id}
//           className="flex flex-col items-center cursor-pointer hover:text-blue-500"
//           onClick={() => onCategorySelect(item.id)}
//         >
//           {item.icon}
//           <span className="text-sm text-gray-600 mt-2">{item.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default function Home() {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <IconNav onCategorySelect={setSelectedCategory} />
//       <ListingPage selectedCategory={selectedCategory} />
//     </div>
//   );
// }



"use client"; // Add this line at the very top

import { useState } from 'react';
import {
  StarIcon,
  GlobeAltIcon,
  HomeIcon,
  BuildingOfficeIcon,
  Squares2X2Icon,
  SparklesIcon,
  HeartIcon,
  AcademicCapIcon,
  GiftIcon,
  SunIcon,
  PuzzlePieceIcon,
  CloudIcon,
  CakeIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'; // Make sure to use the correct Heroicons version and import path

const categories = [
  { id: 'icons', icon: <StarIcon className="h-8 w-8" />, label: 'Icons' },
  { id: 'top', icon: <GlobeAltIcon className="h-8 w-8" />, label: 'Top of the world' },
  { id: 'lakefront', icon: <HomeIcon className="h-8 w-8" />, label: 'Lakefront' },
  { id: 'caves', icon: <BuildingOfficeIcon className="h-8 w-8" />, label: 'Caves' },
  { id: 'surfing', icon: <Squares2X2Icon className="h-8 w-8" />, label: 'Surfing' },
  { id: 'farms', icon: <SparklesIcon className="h-8 w-8" />, label: 'Farms' },
  { id: 'views', icon: <HeartIcon className="h-8 w-8" />, label: 'Amazing views' },
  { id: 'pools', icon: <AcademicCapIcon className="h-8 w-8" />, label: 'Amazing pools' },
  { id: 'omg', icon: <GiftIcon className="h-8 w-8" />, label: 'OMG!' },
  { id: 'luxe', icon: <SunIcon className="h-8 w-8" />, label: 'Luxe' },
  { id: 'castles', icon: <PuzzlePieceIcon className="h-8 w-8" />, label: 'Castles' },
  { id: 'beachfront', icon: <CloudIcon className="h-8 w-8" />, label: 'Beachfront' },
  { id: 'cabins', icon: <CakeIcon className="h-8 w-8" />, label: 'Cabins' },
  { id: 'rooms', icon: <PhotoIcon className="h-8 w-8" />, label: 'Rooms' },
];

const IconNav = ({ onCategorySelect }) => {
  return (
    <div className="flex space-x-6 px-10 py-5 overflow-x-auto bg-white border border-gray-200 shadow rounded-md">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center cursor-pointer hover:text-blue-500"
          onClick={() => onCategorySelect(item.id)}
        >
          {item.icon}
          <span className="text-sm text-gray-600 mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default IconNav;
