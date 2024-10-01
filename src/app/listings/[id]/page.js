

// "use client";

// import React, { useEffect, useState, useCallback } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import axios from 'axios';
// import { toast, Toaster } from 'react-hot-toast';
// import { differenceInDays, eachDayOfInterval } from 'date-fns';
// import styles from './ListingDetail.module.css';
// import Link from 'next/link';

// const ListingDetail = () => {
//     const { id } = useParams();
//     const router = useRouter();

//     const [listingDetails, setListingDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [guestCount, setGuestCount] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [disabledDates, setDisabledDates] = useState([]);
//     const [token, setToken] = useState(null);
//     useEffect(() => {
//         const getToken = () => {
//           if (typeof window !== 'undefined') {
//             const storedToken = localStorage.getItem('accessToken');
//             return storedToken;
//           }
//           return null;
//         };
    
//         setToken(getToken());
    
//         const handleStorageChange = () => {
//           const currentToken = getToken();
//           if (currentToken !== token) {
//             setToken(currentToken);
//           }
//         };
    
//         window.addEventListener('storage', handleStorageChange);
    
//         return () => {
//           window.removeEventListener('storage', handleStorageChange);
//         };
//       }, [token]);
    
//     // Fetch listing details when 'id' changes
//     useEffect(() => {
//         if (id) {
//             fetchListingDetails(id);
//         }
//     }, [id]);

//     const fetchListingDetails = async (listingId) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/`
//                 // {
//                 //     headers: {
//                 //       Authorization: `Bearer ${token}`,
//                 //       'Content-Type': 'application/json',
//                 //     },
//                 //   }
//             );
//             setListingDetails(response.data);
//             fetchReservations(listingId);
//         } catch (err) {
//             console.error('Error fetching listing details:', err);
//             setError('Failed to load listing details.');
//         }
//     };

//     const fetchReservations = async (listingId) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/reservations/`);
//             const reservations = response.data || [];
//             const dates = reservations.flatMap(reservation =>
//                 eachDayOfInterval({
//                     start: new Date(reservation.start_date),
//                     end: new Date(reservation.end_date),
//                 })
//             );
//             setDisabledDates(dates);
//         } catch (err) {
//             console.error('Error fetching reservations:', err);
//         }
//     };


//     if (error) {
//         return <div className={styles.error}>{error}</div>;
//     }

//     if (!listingDetails) {
//         return <div className={styles.loading}>Loading...</div>;
//     }

//     return (
//         <div className={styles.container}>
//             <Toaster />

//             <div className={styles.imageContainer}>
//                 <img
//                     src={listingDetails.image_url}
//                     // src='https://images.unsplash.com/photo-1522071820081-009f0129c71c'
//                     alt={listingDetails.title}
//                     className={styles.image}
//                 />
//             </div>

//             <div className={styles.details}>
//                 <h1 className={styles.title}>{listingDetails.title}</h1>
//                 <p className={styles.host}>Hosted by: <strong>{listingDetails.host}</strong></p>
//                 <div className={styles.description}>
//                     <h2>Description</h2>
//                     <p>{listingDetails.description || "No description available."}</p>
//                 </div>

//                 <div className={styles.booking}>
//                     <h2>Booking Information</h2>
//                     <div className={styles.price}>
//                         <span className={styles.priceAmount}>₹{listingDetails.price}</span>
//                         <span className={styles.priceLabel}>/night</span>
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
//                     <Link href="/my-reservations ">
//                     <button
//                         className={styles.bookButton}
                 
//                         disabled={isLoading}
//                     >
//                         {isLoading ? "Reserving..." : "Reserve"}
//                     </button>
//                     </Link>
//                     <p className={styles.reservationNote}>You won't be charged yet</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ListingDetail;


// "use client";

// import React, { useEffect, useState, useCallback } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import axios from 'axios';
// import { toast, Toaster } from 'react-hot-toast';
// import { differenceInDays, eachDayOfInterval } from 'date-fns';
// import styles from './ListingDetail.module.css';
// import Link from 'next/link';

// const ListingDetail = () => {
//     const { id } = useParams();
//     const router = useRouter();

//     const [listingDetails, setListingDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [guestCount, setGuestCount] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [disabledDates, setDisabledDates] = useState([]);
//     const [token, setToken] = useState(null);

//     useEffect(() => {
//         const getToken = () => {
//           if (typeof window !== 'undefined') {
//             const storedToken = localStorage.getItem('accessToken');
//             return storedToken;
//           }
//           return null;
//         };
    
//         setToken(getToken());
    
//         const handleStorageChange = () => {
//           const currentToken = getToken();
//           if (currentToken !== token) {
//             setToken(currentToken);
//           }
//         };
    
//         window.addEventListener('storage', handleStorageChange);
    
//         return () => {
//           window.removeEventListener('storage', handleStorageChange);
//         };
//     }, [token]);
    
//     useEffect(() => {
//         if (id) {
//             fetchListingDetails(id);
//         }
//     }, [id]);

//     const fetchListingDetails = async (listingId) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/`);
//             setListingDetails(response.data);
//             fetchReservations(listingId);
//         } catch (err) {
//             console.error('Error fetching listing details:', err);
//             setError('Failed to load listing details.');
//         }
//     };

//     const fetchReservations = async (listingId) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/reservations/`);
//             const reservations = response.data || [];
//             const dates = reservations.flatMap(reservation =>
//                 eachDayOfInterval({
//                     start: new Date(reservation.start_date),
//                     end: new Date(reservation.end_date),
//                 })
//             );
//             setDisabledDates(dates);
//         } catch (err) {
//             console.error('Error fetching reservations:', err);
//         }
//     };

//     const handleReservation = async (listingId) => {
//         if (!checkInDate || !checkOutDate) {
//             toast.error("Please select check-in and check-out dates.");
//             return;
//         }

//         setIsLoading(true);

//         try {
//             const response = await axios.post(
//                 'http://localhost:8000/api/reservations/',
//                 {
//                     listing: listingId,
//                     start_date: checkInDate,
//                     end_date: checkOutDate,
//                     guest_count: guestCount
//                 },
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );

//             toast.success("Reservation successful!");
//             router.push('/my-reservations');
//         } catch (error) {
//             console.error('Error making reservation:', error);
//             toast.error(error.response?.data?.message || "Failed to make reservation. Please try again.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     if (error) {
//         return <div className={styles.error}>{error}</div>;
//     }

//     if (!listingDetails) {
//         return <div className={styles.loading}>Loading...</div>;
//     }

//     return (
//         <div className={styles.container}>
//             <Toaster />

//             <div className={styles.imageContainer}>
//                 <img
//                     src={listingDetails.image_url}
//                     alt={listingDetails.title}
//                     className={styles.image}
//                 />
//             </div>

//             <div className={styles.details}>
//                 <h1 className={styles.title}>{listingDetails.title}</h1>
//                 <p className={styles.host}>Hosted by: <strong>{listingDetails.host}</strong></p>
//                 <div className={styles.description}>
//                     <h2>Description</h2>
//                     <p>{listingDetails.description || "No description available."}</p>
//                 </div>

//                 <div className={styles.booking}>
//                     <h2>Booking Information</h2>
//                     <div className={styles.price}>
//                         <span className={styles.priceAmount}>₹{listingDetails.price}</span>
//                         <span className={styles.priceLabel}>/night</span>
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
//                     <Link href="/my-reservations ">
//                     <button
//                         className={styles.bookButton}
//                         onClick={handleReservation}
//                         disabled={isLoading}
//                     >
//                         {isLoading ? "Reserving..." : "Reserve"}
//                     </button>
//                     </Link>
//                     <p className={styles.reservationNote}>You won't be charged yet</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ListingDetail;



// "use client";

// import React, { useEffect, useState, useCallback } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import axios from 'axios';
// import { toast, Toaster } from 'react-hot-toast';
// import { differenceInDays, eachDayOfInterval } from 'date-fns';
// import styles from './ListingDetail.module.css';
// import Link from 'next/link';

// const ListingDetail = () => {
//     const { id } = useParams();
//     const router = useRouter();

//     const [listingDetails, setListingDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [guestCount, setGuestCount] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [disabledDates, setDisabledDates] = useState([]);
//     const [token, setToken] = useState(null);

//     useEffect(() => {
//         const getToken = () => {
//           if (typeof window !== 'undefined') {
//             const storedToken = localStorage.getItem('accessToken');
//             return storedToken;
//           }
//           return null;
//         };
    
//         setToken(getToken());
    
//         const handleStorageChange = () => {
//           const currentToken = getToken();
//           if (currentToken !== token) {
//             setToken(currentToken);
//           }
//         };
    
//         window.addEventListener('storage', handleStorageChange);
    
//         return () => {
//           window.removeEventListener('storage', handleStorageChange);
//         };
//     }, [token]);
    
//     useEffect(() => {
//         if (id) {
//             fetchListingDetails(id);
//         }
//     }, [id]);

//     const fetchListingDetails = async (listingId) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/`);
//             setListingDetails(response.data);
//             fetchReservations(listingId);
//         } catch (err) {
//             console.error('Error fetching listing details:', err);
//             setError('Failed to load listing details.');
//         }
//     };

//     const fetchReservations = async (listingId) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/reservations/${listingId}/reservations/`);
//             const reservations = response.data || [];
//             const dates = reservations.flatMap(reservation =>
//                 eachDayOfInterval({
//                     start: new Date(reservation.start_date),
//                     end: new Date(reservation.end_date),
//                 })
//             );
//             setDisabledDates(dates);
//         } catch (err) {
//             console.error('Error fetching reservations:', err);
//         }
//     };

//     const handleReservation = async (id) => {
//         if (!checkInDate || !checkOutDate) {
//             toast.error("Please select check-in and check-out dates.");
//             return;
//         }

//         setIsLoading(true);

//         try {
//             const response = await axios.post(
//                 'http://localhost:8000/api/reservations/',
//                 {
//                     listing_id: id,  // Use the id from useParams
//                     start_date: checkInDate,
//                     end_date: checkOutDate,
//                     guest_count: guestCount
//                 },
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );

//             toast.success("Reservation successful!");
//             router.push('/my-reservations');
//         } catch (error) {
//             console.error('Error making reservation:', error);
//             toast.error(error.response?.data?.message || "Failed to make reservation. Please try again.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     if (error) {
//         return <div className={styles.error}>{error}</div>;
//     }

//     if (!listingDetails) {
//         return <div className={styles.loading}>Loading...</div>;
//     }

//     return (
//         <div className={styles.container}>
//             <Toaster />

//             <div className={styles.imageContainer}>
//                 <img
//                     src={listingDetails.image_url}
//                     alt={listingDetails.title}
//                     className={styles.image}
//                 />
//             </div>

//             <div className={styles.details}>
//                 <h1 className={styles.title}>{listingDetails.title}</h1>
//                 <p className={styles.host}>Hosted by: <strong>{listingDetails.host}</strong></p>
//                 <div className={styles.description}>
//                     <h2>Description</h2>
//                     <p>{listingDetails.description || "No description available."}</p>
//                 </div>

//                 <div className={styles.booking}>
//                     <h2>Booking Information</h2>
//                     <div className={styles.price}>
//                         <span className={styles.priceAmount}>₹{listingDetails.price}</span>
//                         <span className={styles.priceLabel}>/night</span>
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
//                         onClick={handleReservation}
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

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { eachDayOfInterval } from 'date-fns';
import styles from './ListingDetail.module.css';

const ListingDetail = () => {
    const { id } = useParams();
    const router = useRouter();

    const [listingDetails, setListingDetails] = useState(null);
    const [error, setError] = useState(null);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guestCount, setGuestCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [disabledDates, setDisabledDates] = useState([]);
    const [token, setToken] = useState(null);

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
        if (id) {
            fetchListingDetails(id);
        }
    }, [id]);

    const fetchListingDetails = async (listingId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/listings/${listingId}/`);
            setListingDetails(response.data);
            fetchReservations(listingId);
        } catch (err) {
            console.error('Error fetching listing details:', err);
            setError('Failed to load listing details.');
        }
    };

    const fetchReservations = async (listingId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/reservations/${listingId}/reservations/`);
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

    const handleReservation = async () => {
        if (!checkInDate || !checkOutDate) {
            toast.error("Please select check-in and check-out dates.");
            return;
        }

        if (!listingDetails) {
            toast.error("Listing details are not available.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:8000/api/reservations/',
                {
                    listing_id: listingDetails.id,  // Using the ID from the listing details
                    start_date: checkInDate,
                    end_date: checkOutDate,
                    guest_count: guestCount
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            toast.success("Reservation successful!");
            router.push('/my-reservations');
        } catch (error) {
            console.error('Error making reservation:', error);
            toast.error(error.response?.data?.message || "Failed to make reservation. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

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
                    src={listingDetails.image_url}
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
                    <button
                        className={styles.bookButton}
                        onClick={handleReservation}
                        disabled={isLoading}
                    >
                        {isLoading ? "Reserving..." : "Reserve"}
                    </button>
                    <p className={styles.reservationNote}>You won't be charged yet</p>
                </div>
            </div>
        </div>
    );
};

export default ListingDetail;