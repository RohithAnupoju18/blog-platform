import React, { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import './CategoryFilter.css';

const CategoryFilter = ({ onCategoryChange, currentCategory }) => {
  const categories = ['Any', 'General', 'Programming', 'Knock-Knock', 'Dark', 'Spooky', 'Christmas'];

  return (
    <div className="category-filter">
      <div className="filter-header">
        <FiFilter size={20} />
        <span>Select Category</span>
      </div>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${currentCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;