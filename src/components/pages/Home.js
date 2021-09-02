import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const { data } = await axios.get("http://localhost:3001/users");
    setUser(data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };
  return (
    <>
      <h1>Hello Home Page</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((elem, index) => (
            <>
              <tr key={index + 8458}>
                <td>{index + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.website}</td>
                <td>
                  <Link
                    to={`/user/view/${elem.id}`}
                    className="btn btn-outline-primary mr-5"
                  >
                    View
                  </Link>
                  <Link
                    to={`user/edit/${elem.id}`}
                    className="btn btn-outline-warning mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-outline-danger mr-2"
                    onClick={() => deleteUser(elem.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
