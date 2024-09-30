// PropertyDetail.js

import React, { useEffect, useState } from 'react';

const PropertyDetail = ({ propertyId }) => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyDetail = async () => {
      // Replace with your actual data fetching logic
      const response = await fetch(`/api/properties/${propertyId}`); // Example API endpoint
      const data = await response.json();
      setProperty(data);
      setLoading(false);
    };

    if (propertyId) {
      fetchPropertyDetail();
    }
  }, [propertyId]);

  if (loading) return <p>Loading...</p>;

  if (!property) return <p>No property found!</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p>Host: {property.host}</p>
      <p>Status: {property.status}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PropertyDetail;
