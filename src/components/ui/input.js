// src/components/ui/input.js
import React from 'react';

export const Input = ({ value, onChange, placeholder, className = "", ...props }) => (
  <input
    className={`border rounded px-4 py-2 w-full ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
);
export default Input;
