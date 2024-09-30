// // src/components/Modal.js
// "use client"; // Ensure it's a client component

// import React from 'react';

// const Modal = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg w-96 p-4 relative">
//         <div className="flex justify-between items-center border-b pb-2 mb-4">
//           <h2 className="text-xl font-bold">{title}</h2>
//           <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
//         </div>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// src/components/Modal.js
"use client";

import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-96 p-4 relative">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

