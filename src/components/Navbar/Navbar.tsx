import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "#2727",
        padding: "10px",
        border: "2px solid black",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        Home
      </Link>
      <Link
        to="/registration"
        style={{ textDecoration: "none", color: "#000" }}
      >
        Add Team
      </Link>
    </div>
  );
}

export default Navbar;
