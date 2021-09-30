import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h2>This is posts :{posts.length}</h2>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
<h2>This is post</h2>;
