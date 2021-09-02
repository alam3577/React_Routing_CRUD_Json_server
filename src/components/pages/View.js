import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    loadUserDetail();
  }, []);
  const loadUserDetail = async () => {
    const { data } = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(data);
  };
  return (
    <>
      <h1>This is User Details</h1>
      <div className="user__details">
        <h5>
          {" "}
          <span style={{ fontSize: "30px" }}>UserId</span> :- {id}
        </h5>
        <h3>Name :- {user.name}</h3>
        <h3>UserName :- {user.username}</h3>
        <h3>Email :- {user.email}</h3>
      </div>
      <Link to="/" className="btn btn-outline-primary">
        Home Page
      </Link>
    </>
  );
}

export default View;
