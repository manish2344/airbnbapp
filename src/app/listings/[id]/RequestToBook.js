// src/app/listings/[id]/RequestToBook.js
"use client"; // Ensure this is treated as a client component

import React, { useState } from 'react';
import styles from './RequestToBook.module.css'; // Import CSS for this page

const RequestToBook = ({ listingDetails, totalPrice, nights, checkInDate, checkOutDate, guestCount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [pan, setPan] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking request submission logic here
    alert('Booking request submitted!');
  };

  return (
    <div className={styles.container}>
      <h1>Request to Book</h1>
      <h2>Your Trip</h2>
      <div className={styles.tripDetails}>
        <p><strong>Dates:</strong> {checkInDate} - {checkOutDate} (Total: {nights} nights)</p>
        <p><strong>Guests:</strong> {guestCount}</p>
      </div>

      <h2>Pay with</h2>
      <div className={styles.paymentMethods}>
        <label>
          <input
            type="radio"
            value="Visa"
            checked={paymentMethod === 'Visa'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Visa Card
        </label>
        <label>
          <input
            type="radio"
            value="Mastercard"
            checked={paymentMethod === 'Mastercard'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Mastercard
        </label>
        <label>
          <input
            type="radio"
            value="American Express"
            checked={paymentMethod === 'American Express'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          American Express Card
        </label>
        <label>
          <input
            type="radio"
            value="RuPay"
            checked={paymentMethod === 'RuPay'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          RuPay
        </label>
        <label>
          <input
            type="radio"
            value="UPI"
            checked={paymentMethod === 'UPI'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
      </div>

      {paymentMethod === 'UPI' && (
        <div className={styles.upiSection}>
          <label>
            UPI ID:
            <input
              type="text"
              value={upiId}
              className={styles.inputField}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </label>
        </div>
      )}

      <h2>Message the Host</h2>
      <textarea
        className={styles.inputField}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell the host a little about your trip..."
      />

      <h2>Permanent Account Number (PAN)</h2>
      <input
        type="text"
        value={pan}
        className={styles.inputField}
        onChange={(e) => setPan(e.target.value)}
        required
        placeholder="Your PAN number"
      />

      <div className={styles.cancellationPolicy}>
        <p>Cancellation policy: Cancel before 27 Sep for a partial refund. After that, the reservation is non-refundable.</p>
      </div>

      <div className={styles.groundRules}>
        <p>By selecting the button below, I agree to the Host's House Rules and Airbnb's Rebooking and Refund Policy.</p>
      </div>

      <div className={styles.priceDetails}>
        <h2>Price Details</h2>
        <p>₹{listingDetails.price} x {nights} nights</p>
        <p>Subtotal: ₹{totalPrice}</p>
        <p>Airbnb service fee: ₹{(totalPrice * 0.15).toFixed(2)}</p> {/* Assuming 15% service fee */}
        <h3>Total (INR): ₹{(totalPrice + totalPrice * 0.15).toFixed(2)}</h3>
      </div>

      <button className={styles.requestButton} onClick={handleSubmit}>
        Request to Book
      </button>
    </div>
  );
};

export default RequestToBook;
