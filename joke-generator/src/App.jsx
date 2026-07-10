import React, { useState, useEffect } from 'react';
import { fetchRandomJoke, fetchJokeByCategory } from './api/jokeAPI';
import { FiRefreshCw, FiHistory, FiHeart } from 'react-icons/fi';
import JokeDisplay from './components/JokeDisplay';
import CategoryFilter from './components/CategoryFilter';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('Any');
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('jokeGeneratorFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('jokeGeneratorFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const getJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const newJoke = await fetchJokeByCategory(category);
      setJoke(newJoke);
      setHistory([newJoke, ...history]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleAddFavorite = () => {
    if (joke && !isFavorited(joke)) {
      setFavorites([joke, ...favorites]);
    } else if (joke && isFavorited(joke)) {
      setFavorites(favorites.filter((fav, idx) => idx !== favorites.findIndex(f => f.id === joke.id)));
    }
  };

  const isFavorited = (j) => {
    return favorites.some(
      (fav) =>
        (fav.type === 'single' && j.type === 'single' && fav.joke === j.joke) ||
        (fav.type === 'twopart' && j.type === 'twopart' && fav.setup === j.setup)
    );
  };

  const handleRemoveFavorite = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  const handleShareJoke = () => {
    if (joke) {
      const jokeText = joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`;
      if (navigator.share) {
        navigator.share({
          title: 'Check out this joke!',
          text: jokeText,
        });
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(jokeText);
        alert('Joke copied to clipboard!');
      }
    }
  };

  const handleSelectFromFavorites = (selectedJoke) => {
    setJoke(selectedJoke);
    setShowFavorites(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>😂 Random Joke Generator</h1>
          <p>Get a laugh every time!</p>
        </div>
        <div className="header-actions">
          <button
            className={`nav-btn ${showFavorites ? 'active' : ''}`}
            onClick={() => {
              setShowFavorites(!showFavorites);
              setShowHistory(false);
            }}
          >
            <FiHeart /> Favorites ({favorites.length})
          </button>
          <button
            className={`nav-btn ${showHistory ? 'active' : ''}`}
            onClick={() => {
              setShowHistory(!showHistory);
              setShowFavorites(false);
            }}
          >
            <FiHistory /> History ({history.length})
          </button>
        </div>
      </header>

      <main className="container">
        {showFavorites ? (
          <Favorites
            favorites={favorites}
            onRemove={handleRemoveFavorite}
            onSelectJoke={handleSelectFromFavorites}
          />
        ) : showHistory ? (
          <div className="history-container">
            <h2 className="history-title">📋 Joke History</h2>
            {history.length === 0 ? (
              <div className="empty-state">
                <p>No history yet. Get some jokes first!</p>
              </div>
            ) : (
              <div className="history-list">
                {history.map((h, idx) => (
                  <div key={idx} className="history-item">
                    <span className="history-category">{h.category}</span>
                    <p className="history-text">
                      {h.type === 'single' ? h.joke : `${h.setup} ${h.delivery}`}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="main-content">
              <CategoryFilter
                onCategoryChange={handleCategoryChange}
                currentCategory={category}
              />

              {error && (
                <div className="error-message">
                  <p>⚠️ {error}</p>
                </div>
              )}

              <JokeDisplay
                joke={joke}
                onFavorite={handleAddFavorite}
                isFavorited={joke ? isFavorited(joke) : false}
                onShare={handleShareJoke}
                isLoading={loading}
              />

              <button
                className="get-joke-btn"
                onClick={getJoke}
                disabled={loading}
              >
                <FiRefreshCw className={loading ? 'spinning' : ''} />
                {loading ? 'Loading...' : 'Get New Joke'}
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <p>Made with ❤️ by <strong>Rohitx</strong></p>
        <p>Powered by <a href="https://jokeapi.dev" target="_blank" rel="noopener noreferrer">JokeAPI</a></p>
      </footer>
    </div>
  );
}

export default App;