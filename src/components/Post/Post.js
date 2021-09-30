import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Post.css";
const Post = (props) => {
  const { title, id } = props.post;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div className="post">
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>post details</Link>
      <br />
      <button onClick={handleClick}>Click to see details</button>
    </div>
  );
};

export default Post;
