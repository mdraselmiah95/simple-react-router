import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h2>post details: {postId}</h2>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
