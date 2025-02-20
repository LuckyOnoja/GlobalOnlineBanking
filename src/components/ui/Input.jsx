// components/ui/Input.js
"use client";
import React from 'react';

const Input = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  register,
  error,
  className = '',
  ...rest
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        placeholder={placeholder}
        {...(register && register(name))}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;