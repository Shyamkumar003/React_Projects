import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]); // [dispatch] is optional

  return (
    <div className="App">
      <h1>Posts</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
