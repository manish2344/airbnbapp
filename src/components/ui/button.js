// src/components/ui/button.js
import React from 'react';

export const Button = ({ children, onClick, variant = "default", className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${variant === 'outline' ? 'border' : 'bg-blue-500 text-white'} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
