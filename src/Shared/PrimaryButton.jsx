import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
      {children}
    </button>
  );
};

export default PrimaryButton;
