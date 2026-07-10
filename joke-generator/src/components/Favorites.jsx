import React from 'react';
import { FiTrash2, FiHeart } from 'react-icons/fi';
import './Favorites.css';

const Favorites = ({ favorites, onRemove, onSelectJoke }) => {
  if (favorites.length === 0) {
    return (
      <div className="favorites-container empty-state">
        <FiHeart size={48} />
        <h3>No Favorites Yet</h3>
        <p>Save your favorite jokes to see them here!</p>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">❤️ Your Favorites ({favorites.length})</h2>
      <div className="favorites-list">
        {favorites.map((joke, index) => (
          <div key={index} className="favorite-item">
            <div className="favorite-content" onClick={() => onSelectJoke(joke)}>
              <span className="favorite-category">{joke.category}</span>
              <p className="favorite-text">
                {joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`}
              </p>
            </div>
            <button
              className="remove-btn"
              onClick={() => onRemove(index)}
              title="Remove from favorites"
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;