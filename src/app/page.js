// "use client"; // Ensure this component is treated as a client component

// import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/SearchBar';
// import CategoryList from '../components/CategoryList';
// import ListingPage from '../components/ListingPage';

// const Page = () => {
//     const [searchParams, setSearchParams] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const categories = []; // Add your categories here

//     // Define the handleSearch function
//     const handleSearch = (searchQuery) => {
//         // Implement your search logic here
//         console.log('Searching for:', searchQuery);
//         setSearchParams(searchQuery);
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <SearchBar onSearch={handleSearch} />
//             <CategoryList categories={categories} onCategorySelect={setSelectedCategory} />
//             <ListingPage selectedCategory={selectedCategory} searchParams={searchParams} />
//         </div>
//     );
// };

// export default Page;

// "use client"; // Ensure this component is treated as a client component

// import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/SearchBar';
// import CategoryList from '../components/CategoryList';
// import ListingPage from '../components/ListingPage';

// const Page = () => {
//     const [searchParams, setSearchParams] = useState({});
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const categories = []; // Add your categories here

//     // Define the handleSearch function
//     const handleSearch = (searchQuery) => {
//         // Update the search parameters state
//         console.log('Searching with:', searchQuery);
//         setSearchParams(searchQuery);
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <SearchBar onSearch={handleSearch} />
//             <CategoryList categories={categories} onCategorySelect={setSelectedCategory} />
//             <ListingPage selectedCategory={selectedCategory} searchParams={searchParams} />
//         </div>
//     );
// };

// export default Page;


"use client";
// Page.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ListingPage from '../components/Listingpage';

const Page = () => {
  const [searchParams, setSearchParams] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (searchQuery) => {
    setSearchParams(searchQuery);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <SearchBar onSearch={handleSearch} />
      <CategoryList onCategorySelect={handleCategorySelect} />
      <ListingPage selectedCategory={selectedCategory} searchParams={searchParams} />
    </div>
  );
};

export default Page;
