import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css';

const TripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [addedTrips, setAddedTrips] = useState([]); // This will hold favorite trips
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getToken = () => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('accessToken');
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

  useEffect(() => {
    if (token) {
      fetchReservations();
    }
  }, [token]);

  const fetchReservations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8000/api/reservations/', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch reservations.');
      }
      const data = await response.json();
      setTrips(data);
      console.log('Fetched data:', data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteClick = (reservation) => {
    const isAlreadyFavorite = addedTrips.some((trip) => trip.id === reservation.id);
    if (!isAlreadyFavorite) {
      setAddedTrips((prevAddedTrips) => [...prevAddedTrips, reservation]); // Add to favorites
    } else {
      // Optionally, remove it from favorites if already added
      setAddedTrips((prevAddedTrips) =>
        prevAddedTrips.filter((trip) => trip.id !== reservation.id)
      );
    }
  };

  const TripCard = ({ reservation }) => (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => console.log('Card clicked for reservation:', reservation.id)} // Keep the card click logic
    >
      <div className="relative">
        {reservation.listing.image_url ? (
          <img 
            src={reservation.listing.image_url} 
            alt={reservation.listing.title} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        <button 
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteClick(reservation); // Call the favorite handler
          }}
        >
          <Heart size={20} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{reservation.listing.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{reservation.start_date} - {reservation.end_date}</p>
        <p className="mt-2 text-indigo-600 font-bold">₹ {reservation.listing.price_per_night} / night</p>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Your Trips</h1>
        <p className="text-gray-600 mb-8 text-center">
          Explore where you've been and where you're going
        </p>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Trips</h2>
          {loading ? (
            <p className="text-center text-gray-500">Loading trips...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : trips.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {trips.map((trip) => (
                <TripCard key={trip.id} reservation={trip} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No upcoming trips found. Start planning your adventure!</p>
          )}
        </section>
       
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">My Added Trips</h2>
          {addedTrips.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {addedTrips.map((trip) => (
                <TripCard key={trip.id} reservation={trip} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No trips added yet. Add your favorite trips!</p>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TripsPage;
