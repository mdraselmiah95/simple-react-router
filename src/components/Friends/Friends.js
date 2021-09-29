import React, { useEffect, useState } from "react";

const Friends = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>This is friends Page.{users.length}</h2>
    </div>
  );
};

export default Friends;
