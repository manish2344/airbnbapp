
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css';

const TripCard = ({ reservation, onCancel }) => (
  <div className="border rounded-lg overflow-hidden shadow-sm">
    <div className="relative">
      {reservation.listing.image_url ? (
        <img src={reservation.listing.image_url} alt={reservation.listing.title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image</span>
        </div>
      )}
      <button className="absolute top-2 right-2 text-white">
        <Heart size={24} />
      </button>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">{reservation.listing.title}</h3>
      <p className="text-sm text-gray-600">{reservation.start_date} - {reservation.end_date}</p>
      <p className="mt-2 font-bold">₹ {reservation.listing.price_per_night}</p>
      <button 
        className="mt-3 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        onClick={() => onCancel(reservation.id)}
      >
        Cancel reservation
      </button>
    </div>
  </div>
);

const MyReservations = () => {
  const [trips, setTrips] = useState([]);
  const [token, setToken] = useState(null);

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
  }, []);

  useEffect(() => {
    if (token) {
      fetchReservations();
    }
  }, [token]);

  const fetchReservations = () => {
    fetch('http://localhost:8000/api/reservations/', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setTrips(data);
      console.log('Fetched data:', data);
    })
    .catch(error => console.error('Error fetching data:', error));
  };

  const handleCancelReservation = (reservationId) => {
    fetch(`http://localhost:8000/api/reservations/${reservationId}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the cancelled reservation from the trips state
      setTrips(trips.filter(trip => trip.id !== reservationId));
      console.log('Reservation cancelled successfully');
      // You might want to show a success message to the user here
    })
    .catch(error => {
      console.error('Error cancelling reservation:', error);
      // You might want to show an error message to the user here
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Trips</h1>
        <p className="text-gray-600 mb-6">Where you've been and where you're going</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {trips.map((trip) => (
            <TripCard 
              key={trip.id} 
              reservation={trip} 
              onCancel={handleCancelReservation} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyReservations;