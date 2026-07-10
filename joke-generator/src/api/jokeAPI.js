import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://v2.jokeapi.dev';

const api = axios.create({
  baseURL: API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT || 10000,
});

// Fetch random joke
export const fetchRandomJoke = async () => {
  try {
    const response = await api.get('/joke/Any');
    return response.data;
  } catch (error) {
    console.error('Error fetching random joke:', error);
    throw new Error('Failed to fetch joke. Please try again.');
  }
};

// Fetch joke by category
export const fetchJokeByCategory = async (category) => {
  try {
    const response = await api.get(`/joke/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching joke by category:', error);
    throw new Error(`Failed to fetch ${category} joke. Please try again.`);
  }
};

// Fetch multiple jokes
export const fetchMultipleJokes = async (category, count) => {
  try {
    const response = await api.get(`/joke/${category}?amount=${count}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching multiple jokes:', error);
    throw new Error('Failed to fetch jokes. Please try again.');
  }
};

// Get available categories
export const fetchCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories. Please try again.');
  }
};

export default api;