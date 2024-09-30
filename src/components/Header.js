"use client"; 

import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu, User } from 'lucide-react';
import Modal from './Modal';
import Link from 'next/link';
import { register, login } from '../authService';
import axios from 'axios';
import Image from 'next/image';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [userName, setUserName] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const profileResponse = await axios.get('http://localhost:8000/api/auth/profile/', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setUserName(profileResponse.data.first_name);
        } catch (error) {
          console.error("Error fetching profile:", error);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;

    try {
      await register(username, email, password, firstName, lastName);
      closeModal();
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed! ' + error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.loginUsername.value;
    const password = e.target.loginPassword.value;

    try {
      const response = await login(username, password);
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      const profileResponse = await axios.get('http://localhost:8000/api/auth/profile/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setUserName(profileResponse.data.user.username);
      closeModal();
      alert('Login successful!');
    } catch (error) {
      alert('Login failed! ' + error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUserName('');
    alert('You have been logged out.');
  };

  return (
    <header className="flex justify-between items-center p-4 border-b bg-white shadow-md">
      <div className="text-red-500 text-2xl font-bold">
        <img src="/gmi.png" alt="GM India" className="h-8" />
      </div>
      <div className="flex space-x-4">
        <button className="font-semibold">Stays</button>
        <button>Experiences</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="font-semibold">Manish your home</button>
        <Globe className="w-5 h-5" />
        <div className="relative" ref={dropdownRef}>
          <button 
            className="flex items-center border rounded-full p-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {userName ? (
              <span className="text-lg font-semibold">{userName}</span>
            ) : (
              <>
                <Menu className="w-5 h-5 mr-2" />
                <User className="w-5 h-5" />
              </>
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md">
              {userName ? (
                <>
                  <Link href="/my-trips" legacyBehavior>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">My trips</button>
                  </Link>
                  <Link href="/my-favorites" legacyBehavior>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">My favorites</button>
                  </Link>
                  <Link href="/my-reservations" legacyBehavior>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">My reservations</button>
                  </Link>
                  <Link href="/my-properties" legacyBehavior>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">My properties</button>
                  </Link>
                  <Link href="/airbnb-your-home" legacyBehavior>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Airbnb your home</button>
                  </Link>
                  <button 
                    className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => openModal('login')}
                  >
                    Log In
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => openModal('signup')}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent === 'login' ? 'Log In' : 'Sign Up'}>
        {modalContent === 'login' ? (
          <div>
            <h3 className="mb-4 text-center text-xl font-bold">Log In</h3>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="relative">
                <input
                  type="text"
                  id="loginUsername"
                  placeholder="Username"
                  className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Password"
                  className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg transition hover:bg-blue-600">
                Log In
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="mb-4 text-center text-xl font-bold">Sign Up</h3>
            <form className="space-y-6" onSubmit={handleRegister}>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-lg transition hover:bg-green-600">
                Sign Up
              </button>
            </form>
          </div>
        )}
      </Modal>
    </header>
  );
};

export default Header;

// "use client"; 

// import React, { useState, useEffect, useRef } from 'react';
// import { Globe, Menu, User } from 'lucide-react';
// import Modal from './Modal';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { register, login } from '../authService';
// import axios from 'axios';
// import Image from 'next/image';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState('');
//   const [userName, setUserName] = useState('');
//   const dropdownRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const accessToken = localStorage.getItem('accessToken');
//       if (accessToken) {
//         try {
//           const profileResponse = await axios.get('http://localhost:8000/api/auth/profile/', {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//           });
//           setUserName(profileResponse.data.first_name);
//         } catch (error) {
//           console.error("Error fetching profile:", error);
//           handleLogout(); // Logout if there's an error fetching the profile
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isDropdownOpen) {
//       document.addEventListener('click', handleClickOutside);
//     } else {
//       document.removeEventListener('click', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isDropdownOpen]);

//   const openModal = (content) => {
//     setModalContent(content);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent('');
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const firstName = e.target.firstName.value;
//     const lastName = e.target.lastName.value;

//     try {
//       await register(username, email, password, firstName, lastName);
//       closeModal();
//       alert('Registration successful! Please log in.');
//     } catch (error) {
//       alert('Registration failed! ' + error.message);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const username = e.target.loginUsername.value;
//     const password = e.target.loginPassword.value;

//     try {
//       const response = await login(username, password);
//       const accessToken = response.data.access;
//       const refreshToken = response.data.refresh;

//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);

//       const profileResponse = await axios.get('http://localhost:8000/api/auth/profile/', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       setUserName(profileResponse.data.user.username);
//       closeModal();
//       alert('Login successful!');
//     } catch (error) {
//       alert('Login failed! ' + error.message);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     setUserName('');
//     setIsDropdownOpen(false);
//     router.push('/'); // Redirect to home page after logout
//   };

//   const handleNavigation = (path) => {
//     setIsDropdownOpen(false); // Close dropdown after selection
//     router.push(path);
//   };

//   return (
//     <header className="flex justify-between items-center p-4 border-b bg-white shadow-md">
//       <div className="text-red-500 text-2xl font-bold">
//         <Link href="/">
//           <img src="/gmi.png" alt="GM India" className="h-8 cursor-pointer" />
//         </Link>
//       </div>
//       <div className="flex space-x-4">
//         <button className="font-semibold">Stays</button>
//         <button>Experiences</button>
//       </div>
//       <div className="flex items-center space-x-4">
//         <button className="font-semibold">Manish your home</button>
//         <Globe className="w-5 h-5" />
//         <div className="relative" ref={dropdownRef}>
//           <button 
//             className="flex items-center border rounded-full p-2"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             {userName ? (
//               <span className="text-lg font-semibold">{userName}</span>
//             ) : (
//               <>
//                 <Menu className="w-5 h-5 mr-2" />
//                 <User className="w-5 h-5" />
//               </>
//             )}
//           </button>
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md">
//               {userName ? (
//                 <>
//                   <button onClick={() => handleNavigation('/my-trips')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">My trips</button>
//                   <button onClick={() => handleNavigation('/my-favorites')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">My favorites</button>
//                   <button onClick={() => handleNavigation('/my-reservations')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">My reservations</button>
//                   <button onClick={() => handleNavigation('/my-properties')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">My properties</button>
//                   <button onClick={() => handleNavigation('/airbnb-your-home')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Airbnb your home</button>
//                   <button 
//                     className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button 
//                     className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//                     onClick={() => openModal('login')}
//                   >
//                     Log In
//                   </button>
//                   <button 
//                     className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//                     onClick={() => openModal('signup')}
//                   >
//                     Sign Up
//                   </button>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent === 'login' ? 'Log In' : 'Sign Up'}>
//         {modalContent === 'login' ? (
//           <div>
//             <h3 className="mb-4 text-center text-xl font-bold">Log In</h3>
//             <form className="space-y-6" onSubmit={handleLogin}>
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="loginUsername"
//                   placeholder="Username"
//                   className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="password"
//                   id="loginPassword"
//                   placeholder="Password"
//                   className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <button className="w-full bg-blue-500 text-white py-3 rounded-lg transition hover:bg-blue-600">
//                 Log In
//               </button>
//             </form>
//           </div>
//         ) : (
//           <div>
//             <h3 className="mb-4 text-center text-xl font-bold">Sign Up</h3>
//             <form className="space-y-6" onSubmit={handleRegister}>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="peer w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <button className="w-full bg-green-500 text-white py-3 rounded-lg transition hover:bg-green-600">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         )}
//       </Modal>
//     </header>
//   );
// };

// export default Header;