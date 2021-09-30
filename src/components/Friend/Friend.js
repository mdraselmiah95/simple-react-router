import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";
const Friend = (props) => {
  const { id, name, email, phone, website, address } = props.friend;
  const url = `/friend/${id}`;
  const history = useHistory();
  const handleFriendClick = () => {
    history.push("/home");
  };
  return (
    <div className="friend">
      <h2>
        I am {name} {id}
      </h2>
      <h4>Call me: {phone}</h4>
      <h3>Email: {email}</h3>
      <h5>Visit me: {website}</h5>
      <p>
        <small>
          I live in: {address.city} & {address.street}
        </small>
      </p>
      <Link to={url}>Visit me</Link> <br />
      <Link to={url}>
        <button>Visit me</button>
      </Link>
      <br />
      <button onClick={handleFriendClick}>Visit me 2</button>
    </div>
  );
};

export default Friend;
