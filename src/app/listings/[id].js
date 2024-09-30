import React from 'react';
import { useRouter } from 'next/router';

const ListingDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Here you would fetch the listing details based on the id
  // For now, let's just display the id
  return (
    <div>
      <h1>Listing Detail</h1>
      <p>Listing ID: {id}</p>
    </div>
  );
};

export default ListingDetail;