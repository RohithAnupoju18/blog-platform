import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BlogPlatform</h3>
            <p className="text-gray-400">A modern blog platform with full CRUD functionality.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/create" className="hover:text-white">Create Post</a></li>
              <li><a href="/login" className="hover:text-white">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Developer</h4>
            <p className="text-gray-400">Developed by <strong>Rohitx</strong></p>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <FiHeart className="text-red-500" /> by Rohitx
          </p>
          <p className="mt-2">&copy; 2024 BlogPlatform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;