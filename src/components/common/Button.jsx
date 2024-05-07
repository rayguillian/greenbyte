import React from 'react';

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = 'btn px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl';
  const variantStyle = {
    primary: 'bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600',
    secondary: 'bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600',
  }[variant];

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
