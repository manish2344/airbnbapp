// // src/app/components/UserDropdown.js
// import React from 'react';

// const UserDropdown = ({ isOpen }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign up</a>
//       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log in</a>

//       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Help Centre</a>
//     </div>
//   );
// };

// export default UserDropdown;

// src/components/UserDropdown.js
import React from 'react';

const UserDropdown = ({ isOpen, onOpenModal }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={(e) => {
          e.preventDefault();
          onOpenModal('signup'); // Open signup modal
        }}
      >
        Sign up
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={(e) => {
          e.preventDefault();
          onOpenModal('login'); // Open login modal
        }}
      >
        Log in
      </a>
      
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
       manish Help Centre
      </a>
    </div>
  );
};

export default UserDropdown;
