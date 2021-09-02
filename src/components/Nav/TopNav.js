import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";
function TopNav() {
  return (
    <>
      <div className="nav__container container-fluid">
        <ul>
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              activeStyle={{ color: "white" }}
              exact={true}
              strict
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              style={{ textDecoration: "none" }}
              activeStyle={{ color: "white" }}
              strict
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
        <button className="btn btn-outline-light">
          <NavLink style={{ textDecoration: "none" }} to="/user/add">
            Add Users
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default TopNav;
