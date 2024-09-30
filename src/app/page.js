"use client"; // Ensure this component is treated as a client component

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ListingPage from '../components/ListingPage';

const Page = () => {
    const [searchParams, setSearchParams] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = []; // Add your categories here

    // Define the handleSearch function
    const handleSearch = (searchQuery) => {
        // Implement your search logic here
        console.log('Searching for:', searchQuery);
        setSearchParams(searchQuery);
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            <SearchBar onSearch={handleSearch} />
            <CategoryList categories={categories} onCategorySelect={setSelectedCategory} />
            <ListingPage selectedCategory={selectedCategory} searchParams={searchParams} />
        </div>
    );
};

export default Page;



// "use client";

// import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/SearchBar';
// import CategoryList from '../components/CategoryList';
// import ListingPage from '../components/ListingPage';

// const Page = () => {
//     const [searchParams, setSearchParams] = useState('');  // To store search query
//     const [selectedCategory, setSelectedCategory] = useState(null);  // To store selected category
//     const categories = [];  // Add your categories here

//     // Define the handleSearch function
//     const handleSearch = (searchQuery) => {
//         console.log('Searching for:', searchQuery);
//         setSearchParams(searchQuery);  // Set the search query state
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <SearchBar onSearch={handleSearch} />  {/* Trigger handleSearch on input */}
//             <CategoryList categories={categories} onCategorySelect={setSelectedCategory} />
//             <ListingPage selectedCategory={selectedCategory} searchParams={searchParams} />  {/* Pass searchParams */}
//         </div>
//     );
// };

// export default Page;
