import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";
const Friend = (props) => {
  const { name, email, phone, website, address } = props.friend;
  return (
    <div className="friend">
      <h2>I am {name}</h2>
      <h4>Call me: {phone}</h4>
      <h3>Email: {email}</h3>
      <h5>Visit me: {website}</h5>
      <p>
        <small>
          I live in: {address.city} & {address.street}
        </small>
      </p>
      <Link to="/friend">Visit me</Link>
    </div>
  );
};

export default Friend;
<h2>THis is a single friend.</h2>;
