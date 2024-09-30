// src/components/Register.js
"use client"; // Make sure to add this line to mark the component as a Client Component

import React, { useState } from 'react';
import { register } from '../authService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Optional loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the request starts

        try {
            // Make the registration request
            await register(username, email, password, firstName, lastName);

            // If successful, show a success message and clear form fields
            setMessage('Registration successful!');
            setUsername('');
            setEmail('');
            setFirstName('');
            setLastName('');
            setPassword('');
        } catch (error) {
            // Improved error handling
            if (error.response) {
                setMessage('Registration failed! ' + (error.response.data.error || JSON.stringify(error.response.data)));
            } else if (error.request) {
                setMessage('Registration failed! No response from the server. Please try again later.');
                console.error('Server did not respond:', error.request);
            } else {
                setMessage('Registration failed! ' + error.message);
            }
            console.error('Error details:', error);
        } finally {
            setLoading(false); // Set loading to false once the request completes
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading} // Disable button while loading
                    className={`w-full p-2 text-white rounded-lg focus:outline-none ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition`}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
                {message && (
                    <p className={`mt-4 text-center ${message.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Register;
