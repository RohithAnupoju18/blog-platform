# Blog Platform

A full-featured blog platform with CRUD (Create, Read, Update, Delete) functionality, built with modern web technologies.

## Features

- ✅ Create, Read, Update, and Delete blog posts
- ✅ User authentication and authorization
- ✅ Rich text editing support
- ✅ Comment system
- ✅ Search functionality
- ✅ Category and tag management
- ✅ User profiles
- ✅ Responsive design
- ✅ Dark mode support

## Tech Stack

### Frontend
- React.js
- Redux Toolkit (State Management)
- Tailwind CSS (Styling)
- Axios (HTTP Client)
- React Router (Navigation)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- JWT (Authentication)
- Multer (File Upload)
- Mongoose (ODM)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or MongoDB Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your configuration
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Update .env with your API URL
npm start
```

## Project Structure

```
blog-platform/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── api/
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
├── LICENSE
└── README.md
```

## API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Users
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Comments
- `GET /api/posts/:postId/comments` - Get post comments
- `POST /api/posts/:postId/comments` - Add a comment
- `DELETE /api/comments/:id` - Delete a comment

## Configuration

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog-platform
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## Running the Application

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Usage

1. **Register/Login** - Create an account or login
2. **Create Post** - Click "New Post" to create a blog post
3. **Edit Post** - Click the edit button to modify your post
4. **Delete Post** - Remove posts you no longer need
5. **Comment** - Add comments to posts
6. **Search** - Find posts by keywords

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developed By

**Rohitx** - Full Stack Developer

---

For more information, visit the project repository on GitHub.