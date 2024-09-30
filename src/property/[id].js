"use client"; // Ensure this is a client component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Sample data for demonstration purposes
const listings = [
  {
    id: 1,
    category: 'icons',
    image: 'https://images.unsplash.com/photo-1611095973515-9fe6f13a065b',
    title: "Manish's Iconic Photography Workshop",
    host: 'Manish',
    status: 'Available Now',
  },
  {
    id: 2,
    category: 'icons',
    image: 'https://images.unsplash.com/photo-1533042426-0d2656a75dba',
    title: "Robin's Iconic Statues Tour",
    host: 'Robin',
    status: 'Coming Soon',
  },
  // Add more listings as needed...
];

const ListingDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const foundListing = listings.find((listing) => listing.id === parseInt(id));
      if (foundListing) {
        setListing(foundListing);
      } else {
        setError('Listing not found');
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="listing-detail">
      <h1>{listing.title}</h1>
      <img src={listing.image} alt={listing.title} className="listing-image" />
      <p><strong>Host:</strong> {listing.host}</p>
      <p><strong>Status:</strong> {listing.status}</p>
      <button onClick={() => router.back()} className="back-button">Back to Listings</button>
    </div>
  );
};

export default ListingDetail;
