import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-white text-2xl font-bold">
            Local Reviews
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/categories" className="text-white hover:text-gray-200">
              Categories
            </Link>
            <Link to="/submit-review" className="text-white hover:text-gray-200">
              Submit Review
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-sm text-white bg-blue-700 hover:bg-blue-800">
              Home
            </Link>
            <Link to="/categories" onClick={toggleMenu} className="block px-4 py-2 text-sm text-white bg-blue-700 hover:bg-blue-800">
              Categories
            </Link>
            <Link to="/submit-review" onClick={toggleMenu} className="block px-4 py-2 text-sm text-white bg-blue-700 hover:bg-blue-800">
              Submit Review
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
