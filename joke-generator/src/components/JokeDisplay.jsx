import React, { useState, useEffect } from 'react';
import { FiHeart, FiShare2, FiRefreshCw, FiCopy } from 'react-icons/fi';
import './JokeDisplay.css';

const JokeDisplay = ({ joke, onFavorite, isFavorited, onShare, isLoading }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyJoke = () => {
    const jokeText = joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`;
    navigator.clipboard.writeText(jokeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!joke) {
    return (
      <div className="joke-display empty">
        <p>Click "Get Joke" to start laughing! 😄</p>
      </div>
    );
  }

  return (
    <div className="joke-display">
      <div className="joke-category">{joke.category}</div>
      
      <div className="joke-content">
        {joke.type === 'single' ? (
          <p className="joke-text">{joke.joke}</p>
        ) : (
          <>
            <p className="joke-setup">{joke.setup}</p>
            <div className="joke-divider">⏸️</div>
            <p className="joke-delivery">{joke.delivery}</p>
          </>
        )}
      </div>

      <div className="joke-actions">
        <button
          className="action-btn favorite-btn"
          onClick={onFavorite}
          title="Add to favorites"
        >
          <FiHeart fill={isFavorited ? 'currentColor' : 'none'} />
          <span>{isFavorited ? 'Favorited' : 'Favorite'}</span>
        </button>

        <button
          className="action-btn copy-btn"
          onClick={handleCopyJoke}
          title="Copy joke"
        >
          <FiCopy />
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>

        <button
          className="action-btn share-btn"
          onClick={onShare}
          title="Share joke"
        >
          <FiShare2 />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default JokeDisplay;