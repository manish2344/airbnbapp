


// "use client"; // Ensure this is treated as a client component

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation'; // Use 'useParams' from 'next/navigation'
// import listings from '../data'; // Adjusted path to the data file
// import styles from './ListingDetail.module.css'; // Import the CSS module

// const ListingDetail = () => {
//     const { id } = useParams(); // Get the 'id' parameter
//     const [listingDetails, setListingDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [guestCount, setGuestCount] = useState(1);

//     // Fetch the data once the 'id' is available
//     useEffect(() => {
//         if (id) {
//             // Ensure listings is defined and is an array
//             if (Array.isArray(listings) && listings.length > 0) {
//                 const listing = listings.find(listing => listing.id === parseInt(id)); // Find listing by ID
//                 if (listing) {
//                     setListingDetails(listing);
//                 } else {
//                     setError('Listing not found'); // Set error if listing not found
//                 }
//             } else {
//                 setError('Listings data is not available or is empty'); // Handle case where listings is not an array or is empty
//             }
//         }
//     }, [id]);

//     if (error) return <div className={styles.error}>{error}</div>; // Display error
//     if (!listingDetails) return <div className={styles.loading}>Loading...</div>; // Display loading state

//     // Calculate total price based on nights
//     const nights = checkInDate && checkOutDate ? (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24) : 0;
//     const totalPrice = nights * listingDetails.price;

//     return (
//         <div className={styles.container}>
//             <div className={styles.imageContainer}>
//                 <img
//                     src={listingDetails.image}
//                     alt={listingDetails.title}
//                     className={styles.image}
//                 />
//             </div>
//             <div className={styles.details}>
//                 <h1 className={styles.title}>{listingDetails.title}</h1>
//                 <p className={styles.host}>Hosted by: <strong>{listingDetails.host}</strong></p>
//                 <p className={styles.status}>{listingDetails.status}</p>

//                 <div className={styles.description}>
//                     <h2>Description</h2>
//                     <p>{listingDetails.description || "No description available."}</p>
//                 </div>

//                 <div className={styles.highlights}>
//                     <h2>Listing Highlights</h2>
//                     <ul>
//                         <li>Self check-in</li>
//                         <li>Park for free</li>
//                         <li>Free cancellation before 13 Oct</li>
//                     </ul>
//                 </div>

//                 <div className={styles.amenities}>
//                     <h2>Amenities</h2>
//                     <ul>
//                         {listingDetails.amenities && listingDetails.amenities.map((amenity, index) => (
//                             <li key={index}>{amenity}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className={styles.booking}>
//                     <h2>Booking Information</h2>
//                     <div className={styles.price}>
//                         <div>
//                             <span className={styles.priceAmount}>₹{listingDetails.price}</span>
//                             <span className={styles.priceLabel}>night</span>
//                         </div>
//                         <div className={styles.priceTotal}>
//                             <span>Total for {nights} nights:</span>
//                             <strong>₹{totalPrice}</strong>
//                         </div>
//                     </div>

//                     <div className={styles.dates}>
//                         <label>
//                             Check-in:
//                             <input
//                                 type="date"
//                                 value={checkInDate}
//                                 className={styles.dateInput}
//                                 onChange={e => setCheckInDate(e.target.value)}
//                             />
//                         </label>
//                         <label>
//                             Check-out:
//                             <input
//                                 type="date"
//                                 value={checkOutDate}
//                                 className={styles.dateInput}
//                                 onChange={e => setCheckOutDate(e.target.value)}
//                             />
//                         </label>
//                     </div>

//                     <div className={styles.guestCount}>
//                         <label>
//                             Guests:
//                             <input
//                                 type="number"
//                                 min="1"
//                                 max="10"
//                                 value={guestCount}
//                                 className={styles.numberInput}
//                                 onChange={e => setGuestCount(e.target.value)}
//                             />
//                         </label>
//                     </div>

//                     <button className={styles.bookButton}>Reserve</button>
//                     <p className={styles.reservationNote}>You won't be charged yet</p>
//                 </div>

//                 <div className={styles.reviews}>
//                     <h2>Reviews</h2>
//                     <p>No reviews yet. This host has {listingDetails.hostReviews} reviews for other places to stay.</p>
//                 </div>

//                 <div className={styles.hostDetails}>
//                     <h2>Meet Your Host</h2>
//                     <p><strong>{listingDetails.host}</strong></p>
//                     <p>Host Rating: {listingDetails.hostRating} out of 5</p>
//                     <p>Response Rate: {listingDetails.responseRate}</p>
//                     <p>Average response time: {listingDetails.responseTime}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ListingDetail;

// "use client"; // Ensure this is treated as a client component

// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation'; // Use 'useParams' and 'useRouter' from 'next/navigation'
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { differenceInDays, eachDayOfInterval } from 'date-fns';
// import listings from '../data'; // Adjusted path to the data file
// import styles from './ListingDetail.module.css'; // Import the CSS module

// // Define initial date range
// const initialDateRange = {
//     startDate: new Date(),
//     endDate: new Date(),
// };

// const ListingDetail = () => {
//     const { id } = useParams(); // Get the 'id' parameter
//     const router = useRouter(); // Router instance for navigation
//     const [listingDetails, setListingDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [guestCount, setGuestCount] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [disabledDates, setDisabledDates] = useState([]); // Removed TypeScript annotation

//     // Fetch the data once the 'id' is available
//     useEffect(() => {
//         if (id) {
//             if (Array.isArray(listings) && listings.length > 0) {
//                 const listing = listings.find(listing => listing.id === parseInt(id));
//                 if (listing) {
//                     setListingDetails(listing);
//                     // Fetch reservations for the listing if needed and update disabledDates
//                     fetchReservations(listing.id);
//                 } else {
//                     setError('Listing not found');
//                 }
//             } else {
//                 setError('Listings data is not available or is empty');
//             }
//         }
//     }, [id]);

//     const fetchReservations = async (listingId) => {
//         try {
//             const response = await axios.get(`/api/reservations?listingId=${listingId}`);
//             const reservations = response.data || [];
//             const dates = reservations.flatMap(reservation => 
//                 eachDayOfInterval({
//                     start: new Date(reservation.startDate),
//                     end: new Date(reservation.endDate),
//                 })
//             );
//             setDisabledDates(dates);
//         } catch (error) {
//             console.error('Error fetching reservations:', error);
//         }
//     };

//     const onCreateReservation = useCallback(() => {
//         if (!listingDetails) {
//             return toast.error('No listing details available.');
//         }

//         if (!checkInDate || !checkOutDate) {
//             return toast.error('Please select valid check-in and check-out dates.');
//         }

//         setIsLoading(true);

//         axios.post('/api/reservations', {
//             totalPrice,
//             startDate: checkInDate,
//             endDate: checkOutDate,
//             listingId: listingDetails?.id,
//             guestCount
//         })
//             .then(() => {
//                 toast.success('Listing reserved!');
//                 setCheckInDate('');
//                 setCheckOutDate('');
//                 router.push('/trips'); // Redirect to 'trips'
//             })
//             .catch(() => {
//                 toast.error('Something went wrong.');
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     }, [totalPrice, checkInDate, checkOutDate, guestCount, listingDetails, router]);

//     // Update total price whenever check-in or check-out dates change
//     useEffect(() => {
//         if (checkInDate && checkOutDate) {
//             const dayCount = differenceInDays(new Date(checkOutDate), new Date(checkInDate));
//             if (dayCount && listingDetails?.price) {
//                 setTotalPrice(dayCount * listingDetails.price);
//             } else {
//                 setTotalPrice(listingDetails?.price || 0);
//             }
//         }
//     }, [checkInDate, checkOutDate, listingDetails]);

//     if (error) return <div className={styles.error}>{error}</div>;
//     if (!listingDetails) return <div className={styles.loading}>Loading...</div>;

//     return (
//         <div className={styles.container}>
//             <div className={styles.imageContainer}>
//                 <img
//                     src={listingDetails.image}
//                     alt={listingDetails.title}
//                     className={styles.image}
//                 />
//             </div>
//             <div className={styles.details}>
//                 <h1 className={styles.title}>{listingDetails.title}</h1>
//                 <p className={styles.host}>Hosted by: <strong>{listingDetails.host}</strong></p>
//                 <p className={styles.status}>{listingDetails.status}</p>

//                 <div className={styles.description}>
//                     <h2>Description</h2>
//                     <p>{listingDetails.description || "No description available."}</p>
//                 </div>

//                 <div className={styles.highlights}>
//                     <h2>Listing Highlights</h2>
//                     <ul>
//                         <li>Self check-in</li>
//                         <li>Park for free</li>
//                         <li>Free cancellation before 13 Oct</li>
//                     </ul>
//                 </div>

//                 <div className={styles.booking}>
//                     <h2>Booking Information</h2>
//                     <div className={styles.price}>
//                         <div>
//                             <span className={styles.priceAmount}>₹{listingDetails.price}</span>
//                             <span className={styles.priceLabel}>/night</span>
//                         </div>
//                         <div className={styles.priceTotal}>
//                             <span>Total for {(new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)} nights:</span>
//                             <strong>₹{totalPrice}</strong>
//                         </div>
//                     </div>

//                     <div className={styles.dates}>
//                         <label>
//                             Check-in:
//                             <input
//                                 type="date"
//                                 value={checkInDate}
//                                 className={styles.dateInput}
//                                 min={new Date().toISOString().split("T")[0]}
//                                 onChange={e => setCheckInDate(e.target.value)}
//                                 disabled={isLoading}
//                             />
//                         </label>
//                         <label>
//                             Check-out:
//                             <input
//                                 type="date"
//                                 value={checkOutDate}
//                                 className={styles.dateInput}
//                                 min={checkInDate}
//                                 onChange={e => setCheckOutDate(e.target.value)}
//                                 disabled={isLoading}
//                             />
//                         </label>
//                     </div>

//                     <div className={styles.guestCount}>
//                         <label>
//                             Guests:
//                             <input
//                                 type="number"
//                                 min="1"
//                                 max="10"
//                                 value={guestCount}
//                                 className={styles.numberInput}
//                                 onChange={e => setGuestCount(parseInt(e.target.value))}
//                                 disabled={isLoading}
//                             />
//                         </label>
//                     </div>

//                     <button 
//                         className={styles.bookButton} 
//                         onClick={onCreateReservation} 
//                         disabled={isLoading}
//                     >
//                         {isLoading ? "Reserving..." : "Reserve"}
//                     </button>
//                     <p className={styles.reservationNote}>You won't be charged yet</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ListingDetail;


// "use client"; // This directive is necessary for client-side interactivity in Next.js App Router

// import React, { useEffect, useState, useCallback } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import axios from 'axios';
// import { toast, Toaster } from 'react-hot-toast';
// import { differenceInDays, eachDayOfInterval } from 'date-fns';
// import styles from './ListingDetail.module.css';

// const ListingDetail = () => {
//     const { id } = useParams(); // Extract 'id' from the URL
//     const router = useRouter(); // Router instance for navigation

//     // State variables
//     const [listingDetails, setListingDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [guestCount, setGuestCount] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [disabledDates, setDisabledDates] = useState([]);

//     // Fetch listing details when 'id' changes
//     useEffect(() => {
//         if (id) {
//             fetchListingDetails(id);
//         }
//     }, [id]);

//     // Function to fetch listing details
//     const fetchListingDetails = async (listingId) => {
//         try {
//             const response = await axios.get(`/api/listings/${listingId}`);
//             setListingDetails(response.data);
//             fetchReservations(listingId);
//         } catch (err) {
//             console.error('Error fetching listing details:', err);
//             setError('Failed to load listing details.');
//         }
//     };

//     // Function to fetch reservations and set disabled dates
//     const fetchReservations = async (listingId) => {
//         try {
//             const response = await axios.get(`/api/reservations?listingId=${listingId}`);
//             const reservations = response.data || [];
//             const dates = reservations.flatMap(reservation =>
//                 eachDayOfInterval({
//                     start: new Date(reservation.startDate),
//                     end: new Date(reservation.endDate),
//                 })
//             );
//             setDisabledDates(dates);
//         } catch (err) {
//             console.error('Error fetching reservations:', err);
//             // Optionally set an error state or notify the user
//         }
//     };

//     // Handle reservation creation
//     const onCreateReservation = useCallback(async () => {
//         if (!listingDetails) {
//             return toast.error('No listing details available.');
//         }

//         if (!checkInDate || !checkOutDate) {
//             return toast.error('Please select valid check-in and check-out dates.');
//         }

//         // Validate that selected dates are not disabled
//         const selectedCheckIn = new Date(checkInDate);
//         const selectedCheckOut = new Date(checkOutDate);

//         for (let day = selectedCheckIn; day <= selectedCheckOut; day.setDate(day.getDate() + 1)) {
//             const date = new Date(day);
//             if (disabledDates.some(disabledDate =>
//                 disabledDate.toDateString() === date.toDateString()
//             )) {
//                 return toast.error('Selected dates are unavailable.');
//             }
//         }

//         setIsLoading(true);

//         try {
//             await axios.post('/api/reservations', {
//                 totalPrice,
//                 startDate: checkInDate,
//                 endDate: checkOutDate,
//                 listingId: listingDetails.id,
//                 guestCount,
//             });
//             toast.success('Listing reserved successfully!');
//             // Reset form fields
//             setCheckInDate('');
//             setCheckOutDate('');
//             setGuestCount(1);
//             setTotalPrice(0);
//             // Optionally, redirect to a different page
//             router.push('/trips');
//         } catch (err) {
//             console.error('Error creating reservation:', err);
//             toast.error('Failed to reserve listing. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     }, [totalPrice, checkInDate, checkOutDate, guestCount, listingDetails, disabledDates, router]);

//     // Calculate total price whenever dates change
//     useEffect(() => {
//         if (checkInDate && checkOutDate && listingDetails) {
//             const start = new Date(checkInDate);
//             const end = new Date(checkOutDate);
//             const dayCount = differenceInDays(end, start);
//             if (dayCount > 0) {
//                 setTotalPrice(dayCount * listingDetails.price);
//             } else {
//                 setTotalPrice(0);
//             }
//         } else {
//             setTotalPrice(0);
//         }
//     }, [checkInDate, checkOutDate, listingDetails]);

//     // Render error state
//     if (error) {
//         return <div className={styles.error}>{error}</div>;
//     }

//     // Render loading state
//     if (!listingDetails) {
//         return <div className={styles.loading}>Loading...</div>;
//     }

//     return (
//         <div className={styles.container}>
//             {/* Toast Notifications */}
//             <Toaster />

//             <div className={styles.imageContainer}>
//                 <img
//                     src={listingDetails.image}
//                     alt={listingDetails.title}
//                     className={styles.image}
//                 />
//             </div>
//             <div className={styles.details}>
//                 <h1 className={styles.title}>{listingDetails.title}</h1>
//                 <p className={styles.host}>Hosted by: <strong>{listingDetails.host}</strong></p>
//                 <p className={styles.status}>{listingDetails.status}</p>

//                 <div className={styles.description}>
//                     <h2>Description</h2>
//                     <p>{listingDetails.description || "No description available."}</p>
//                 </div>

//                 <div className={styles.highlights}>
//                     <h2>Listing Highlights</h2>
//                     <ul>
//                         {listingDetails.highlights && listingDetails.highlights.length > 0 ? (
//                             listingDetails.highlights.map((highlight, index) => (
//                                 <li key={index}>{highlight}</li>
//                             ))
//                         ) : (
//                             <li>No highlights available.</li>
//                         )}
//                     </ul>
//                 </div>

//                 <div className={styles.booking}>
//                     <h2>Booking Information</h2>
//                     <div className={styles.price}>
//                         <div>
//                             <span className={styles.priceAmount}>₹{listingDetails.price}</span>
//                             <span className={styles.priceLabel}>/night</span>
//                         </div>
//                         <div className={styles.priceTotal}>
//                             <span>Total for </span>
//                             <strong>
//                                 {differenceInDays(new Date(checkOutDate), new Date(checkInDate)) > 0
//                                     ? differenceInDays(new Date(checkOutDate), new Date(checkInDate))
//                                     : 0}{" "}
//                                 nights:
//                             </strong>
//                             <strong>₹{totalPrice}</strong>
//                         </div>
//                     </div>

//                     <div className={styles.dates}>
//                         <label>
//                             Check-in:
//                             <input
//                                 type="date"
//                                 value={checkInDate}
//                                 className={styles.dateInput}
//                                 min={new Date().toISOString().split("T")[0]}
//                                 onChange={e => setCheckInDate(e.target.value)}
//                                 disabled={isLoading}
//                             />
//                         </label>
//                         <label>
//                             Check-out:
//                             <input
//                                 type="date"
//                                 value={checkOutDate}
//                                 className={styles.dateInput}
//                                 min={checkInDate || new Date().toISOString().split("T")[0]}
//                                 onChange={e => setCheckOutDate(e.target.value)}
//                                 disabled={isLoading}
//                             />
//                         </label>
//                     </div>

//                     <div className={styles.guestCount}>
//                         <label>
//                             Guests:
//                             <input
//                                 type="number"
//                                 min="1"
//                                 max="10"
//                                 value={guestCount}
//                                 className={styles.numberInput}
//                                 onChange={e => setGuestCount(parseInt(e.target.value) || 1)}
//                                 disabled={isLoading}
//                             />
//                         </label>
//                     </div>

//                     <button
//                         className={styles.bookButton}
//                         onClick={onCreateReservation}
//                         disabled={isLoading}
//                     >
//                         {isLoading ? "Reserving..." : "Reserve"}
//                     </button>
//                     <p className={styles.reservationNote}>You won't be charged yet</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ListingDetail;

"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { differenceInDays, eachDayOfInterval } from 'date-fns';
import styles from './ListingDetail.module.css';
import Link from 'next/link';

const ListingDetail = () => {
    const { id } = useParams();
    const router = useRouter();

    const [listingDetails, setListingDetails] = useState(null);
    const [error, setError] = useState(null);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guestCount, setGuestCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [disabledDates, setDisabledDates] = useState([]);
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
      }, [token]);
    
    // Fetch listing details when 'id' changes
    useEffect(() => {
        if (id) {
            fetchListingDetails(id);
        }
    }, [id]);

    const fetchListingDetails = async (listingId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/`
                // {
                //     headers: {
                //       Authorization: `Bearer ${token}`,
                //       'Content-Type': 'application/json',
                //     },
                //   }
            );
            setListingDetails(response.data);
            fetchReservations(listingId);
        } catch (err) {
            console.error('Error fetching listing details:', err);
            setError('Failed to load listing details.');
        }
    };

    const fetchReservations = async (listingId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/reservations/`);
            const reservations = response.data || [];
            const dates = reservations.flatMap(reservation =>
                eachDayOfInterval({
                    start: new Date(reservation.start_date),
                    end: new Date(reservation.end_date),
                })
            );
            setDisabledDates(dates);
        } catch (err) {
            console.error('Error fetching reservations:', err);
        }
    };

    const onCreateReservation = useCallback(async () => {
        if (!listingDetails) {
            return toast.error('No listing details available.');
        }

        if (!checkInDate || !checkOutDate) {
            return toast.error('Please select valid check-in and check-out dates.');
        }

        const selectedCheckIn = new Date(checkInDate);
        const selectedCheckOut = new Date(checkOutDate);

        for (let day = selectedCheckIn; day <= selectedCheckOut; day.setDate(day.getDate() + 1)) {
            const date = new Date(day);
            if (disabledDates.some(disabledDate =>
                disabledDate.toDateString() === date.toDateString()
            )) {
                return toast.error('Selected dates are unavailable.');
            }
        }

        setIsLoading(true);

        try {
            await axios.post('http://localhost:8000/api/reservations/',
                {
                    headers: {
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'application/json',
                    },
                  }, {
                total_price: totalPrice,
                start_date: checkInDate,
                end_date: checkOutDate,
                listing_id: listingDetails.id,
                guest_count: guestCount,
            });
            toast.success('Listing reserved successfully!');
            setCheckInDate('');
            setCheckOutDate('');
            setGuestCount(1);
            setTotalPrice(0);
            router.push('/trips');
        } catch (err) {
            console.error('Error creating reservation:', err);
            toast.error('Failed to reserve listing. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [totalPrice, checkInDate, checkOutDate, guestCount, listingDetails, disabledDates, router]);

    useEffect(() => {
        if (checkInDate && checkOutDate && listingDetails) {
            const start = new Date(checkInDate);
            const end = new Date(checkOutDate);
            const dayCount = differenceInDays(end, start);
            if (dayCount > 0) {
                setTotalPrice(dayCount * listingDetails.price);
            } else {
                setTotalPrice(0);
            }
        } else {
            setTotalPrice(0);
        }
    }, [checkInDate, checkOutDate, listingDetails]);

    // Rendering the component UI
    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!listingDetails) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <Toaster />

            <div className={styles.imageContainer}>
                <img
                    // src={listingDetails.image}
                    src='https://images.unsplash.com/photo-1522071820081-009f0129c71c'
                    alt={listingDetails.title}
                    className={styles.image}
                />
            </div>

            <div className={styles.details}>
                <h1 className={styles.title}>{listingDetails.title}</h1>
                <p className={styles.host}>Hosted by: <strong>{listingDetails.host}</strong></p>
                <div className={styles.description}>
                    <h2>Description</h2>
                    <p>{listingDetails.description || "No description available."}</p>
                </div>

                <div className={styles.booking}>
                    <h2>Booking Information</h2>
                    <div className={styles.price}>
                        <span className={styles.priceAmount}>₹{listingDetails.price}</span>
                        <span className={styles.priceLabel}>/night</span>
                    </div>

                    <div className={styles.dates}>
                        <label>
                            Check-in:
                            <input
                                type="date"
                                value={checkInDate}
                                className={styles.dateInput}
                                min={new Date().toISOString().split("T")[0]}
                                onChange={e => setCheckInDate(e.target.value)}
                                disabled={isLoading}
                            />
                        </label>
                        <label>
                            Check-out:
                            <input
                                type="date"
                                value={checkOutDate}
                                className={styles.dateInput}
                                min={checkInDate || new Date().toISOString().split("T")[0]}
                                onChange={e => setCheckOutDate(e.target.value)}
                                disabled={isLoading}
                            />
                        </label>
                    </div>

                    <div className={styles.guestCount}>
                        <label>
                            Guests:
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={guestCount}
                                className={styles.numberInput}
                                onChange={e => setGuestCount(parseInt(e.target.value) || 1)}
                                disabled={isLoading}
                            />
                        </label>
                    </div>
                    <Link href="/my-reservations ">
                    <button
                        className={styles.bookButton}
                        onClick={onCreateReservation}
                        disabled={isLoading}
                    >
                        {isLoading ? "Reserving..." : "Reserve"}
                    </button>
                    </Link>
                    <p className={styles.reservationNote}>You won't be charged yet</p>
                </div>
            </div>
        </div>
    );
};

export default ListingDetail;
