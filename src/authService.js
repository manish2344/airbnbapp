// // src/authService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/auth/'; // Ensure this URL is correct

// export const register = async (username, email, password) => {
//     return await axios.post(`${API_URL}register/`, { username, email, password });
// };

// export const login = async (username, password) => {
//     return await axios.post(`${API_URL}login/`, { username, password });
// };
// src/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/'; // Ensure this URL is correct

// Registration function
export const register = async (username, email, password, firstName, lastName) => {
    return await axios.post(`${API_URL}register/`, {
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName,
    });
};

// Login function
export const login = async (username, password) => {
    return await axios.post(`${API_URL}login/`, { username, password });
};
