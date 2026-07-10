import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { FiMenu, FiX, FiHome, FiPlusCircle, FiLogOut, FiLogIn } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BlogPlatform
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border rounded-l-md focus:outline-none"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Search
              </button>
            </form>

            <Link to="/" className="flex items-center gap-2 hover:text-blue-600">
              <FiHome /> Home
            </Link>

            {token ? (
              <>
                <Link to="/create" className="flex items-center gap-2 hover:text-blue-600">
                  <FiPlusCircle /> Create
                </Link>
                <Link to={`/user/${user?._id}`} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  {user?.name}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800"
                >
                  <FiLogOut /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-2 hover:text-blue-600">
                  <FiLogIn /> Login
                </Link>
                <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border rounded-l-md focus:outline-none flex-1"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Search
              </button>
            </form>

            <Link to="/" className="flex items-center gap-2 hover:text-blue-600">
              <FiHome /> Home
            </Link>

            {token ? (
              <>
                <Link to="/create" className="flex items-center gap-2 hover:text-blue-600">
                  <FiPlusCircle /> Create
                </Link>
                <Link to={`/user/${user?._id}`} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  {user?.name}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800"
                >
                  <FiLogOut /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-2 hover:text-blue-600">
                  <FiLogIn /> Login
                </Link>
                <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;