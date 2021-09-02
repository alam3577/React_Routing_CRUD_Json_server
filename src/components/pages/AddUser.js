import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddUser() {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    website: "",
  });
  const history = useHistory();
  const { name, email, website } = detail;
  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", detail);
    setDetail({
      name: "",
      email: "",
      website: "",
    });
    history.push("/");
  };

  return (
    <>
      <div className="adduser__container">
        <h3>Add User</h3>
        <form>
          <input
            className="form-control mt-2 mb-4 "
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={(e) => handleChange(e)}
            value={name}
          />
          <input
            className="form-control  mb-4"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => handleChange(e)}
            value={email}
          />
          <input
            className="form-control  mb-4"
            type="text"
            name="website"
            placeholder="Enter website"
            onChange={(e) => handleChange(e)}
            value={website}
          />
          <button onClick={onSubmit} className="btn btn-outline-success">
            Add User
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
