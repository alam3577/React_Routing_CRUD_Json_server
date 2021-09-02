import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditUser() {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    website: "",
  });
  const { id } = useParams();
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
    await axios.put(`http://localhost:3001/users/${id}`, detail);
    setDetail({
      name: "",
      email: "",
      website: "",
    });
    history.push("/");
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const { data } = await axios.get(`http://localhost:3001/users/${id}`);
    console.log("THIS IS GET DETAILS", data);
    setDetail({
      name: data.name,
      email: data.email,
      website: data.website,
    });
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
            Update User
          </button>
        </form>
      </div>
    </>
  );
}

export default EditUser;
