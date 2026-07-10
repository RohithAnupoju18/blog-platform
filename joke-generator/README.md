# Random Joke Generator

A simple and fun random joke generator application that fetches jokes from an external API. Built with modern web technologies.

## Features

- 🎭 Fetch random jokes from external API
- 🎲 Get jokes by category
- 📋 View joke history
- ⭐ Save favorite jokes
- 🎨 Beautiful and responsive UI
- 🌙 Dark mode support
- 📱 Mobile-friendly design
- ⚡ Fast and lightweight

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- Cors
- Dotenv

### External API
- JokeAPI (https://jokeapi.dev)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/RohithAnupoju18/random-joke-generator.git
cd random-joke-generator

# Install dependencies
npm install

# Start the development server
npm start
```

## Project Structure

```
random-joke-generator/
├── public/
│   └── index.html
├── src/
│   ��── components/
│   │   ├── JokeDisplay.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── Favorites.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── History.jsx
│   ├── api/
│   │   └── jokeAPI.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── LICENSE
```

## API Endpoints Used

### JokeAPI
- `GET https://v2.jokeapi.dev/joke/Any` - Get a random joke
- `GET https://v2.jokeapi.dev/joke/{category}` - Get jokes by category
- `GET https://v2.jokeapi.dev/categories` - Get available categories

## Available Categories

- General
- Knock-Knock
- Programming
- Dark
- Spooky
- Christmas

## Features Explained

### Random Joke Generator
Click the "Get Joke" button to fetch a random joke from the JokeAPI. Jokes can be in two parts (setup and delivery) or single-part jokes.

### Category Filter
Select from various joke categories to get jokes specific to your preference.

### Favorites
Save your favorite jokes and access them anytime from the favorites section.

### History
View the history of all jokes you've fetched during your session.

## Usage

1. **Get Random Joke**: Click the "Get New Joke" button to fetch a random joke
2. **Select Category**: Choose a category from the dropdown to filter jokes
3. **Save Favorite**: Click the heart icon to add the joke to favorites
4. **View History**: Navigate to the History page to see all fetched jokes
5. **Share**: Share jokes with friends using the share button

## Environment Configuration

Create a `.env` file in the root directory:

```
REACT_APP_API_URL=https://v2.jokeapi.dev
REACT_APP_API_TIMEOUT=10000
```

## How It Works

1. The app makes HTTP requests to the JokeAPI endpoint
2. Jokes are displayed in a clean, readable format
3. Users can save favorites to local storage
4. History is maintained in component state
5. Categories filter the type of jokes displayed

## Joke Formats

### Single-Part Jokes
```json
{
  "category": "General",
  "type": "single",
  "joke": "Why don't scientists trust atoms? Because they make up everything!"
}
```

### Two-Part Jokes
```json
{
  "category": "Programming",
  "type": "twopart",
  "setup": "How many programmers does it take to change a light bulb?",
  "delivery": "None, that's a hardware problem!"
}
```

## Error Handling

- Network errors are caught and displayed to the user
- Loading states prevent multiple simultaneous requests
- Error messages provide helpful feedback

## Local Storage

- **Favorites**: Stored in `localStorage` under `jokeGeneratorFavorites`
- **Settings**: Theme preference stored in `localStorage` under `jokeGeneratorTheme`

## Performance Optimization

- Lazy loading of components
- Memoization of expensive operations
- Efficient state management
- Minimized re-renders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developed By

**Rohitx** - Full Stack Developer

## Acknowledgments

- Thanks to [JokeAPI](https://jokeapi.dev) for providing the free joke API
- Inspired by the need for daily laughs 😄

## Support

If you encounter any issues, please open an issue on GitHub.

## Future Enhancements

- [ ] Add joke search functionality
- [ ] Implement user authentication for persistent favorites
- [ ] Add joke translation to multiple languages
- [ ] Create mobile app version
- [ ] Add joke submission feature
- [ ] Implement joke ratings and reviews

---

Made with ❤️ by Rohitx