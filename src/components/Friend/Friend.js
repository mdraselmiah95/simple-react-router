import React from "react";

const Friend = (props) => {
  const { name, email, phone, website, address } = props.friend;
  return (
    <div>
      <h2>I am {name}</h2>
      <h4>Call me: {phone}</h4>
      <h3>Email: {email}</h3>
      <h5>Visit me: {website}</h5>
      <p>
        <small>I live in: {address.city}</small>
      </p>
    </div>
  );
};

export default Friend;
<h2>THis is a single friend.</h2>;
