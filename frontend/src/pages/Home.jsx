import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postsAPI } from '../api/api';
import { setPosts, setLoading, setError, setPagination } from '../redux/slices/postSlice';
import { formatDistanceToNow } from 'date-fns';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, pagination } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchPosts = async (page) => {
    dispatch(setLoading(true));
    try {
      const response = await postsAPI.getAllPosts(page, 10);
      dispatch(setPosts(response.data.posts));
      dispatch(setPagination(response.data.pagination));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Latest Blog Posts</h1>
        <p className="text-gray-600">Discover amazing stories and insights</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No posts yet. Be the first to create one!</p>
          <Link to="/create" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Create Post
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 mb-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                  </span>
                </div>
                <Link to={`/post/${post._id}`}>
                  <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">{post.title}</h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt || post.content.substring(0, 150)}...</p>
                <div className="flex items-center justify-between">
                  <Link
                    to={`/user/${post.author._id}`}
                    className="flex items-center gap-2 hover:text-blue-600"
                  >
                    {post.author.avatar && (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <span className="font-semibold">{post.author.name}</span>
                  </Link>
                  <div className="flex gap-4 text-gray-500 text-sm">
                    <span>👁 {post.views}</span>
                    <span>❤️ {post.likes.length}</span>
                    <span>💬 {post.commentCount}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;