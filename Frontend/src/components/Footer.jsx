import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Local Reviews. All rights reserved.</p>
        <p className="mt-2">Follow us on:
          <a href="#" className="text-blue-400 hover:text-blue-600 ml-2">Twitter</a> |
          <a href="#" className="text-blue-400 hover:text-blue-600 ml-2">Facebook</a> |
          <a href="#" className="text-blue-400 hover:text-blue-600 ml-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
