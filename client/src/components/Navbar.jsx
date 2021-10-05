import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <div>
          <h3 className="brand">
            <Link to="/" className="custom-link">
              MobiHub
            </Link>
          </h3>
        </div>
        <div className="nav-links">
          <div>
            <Link to="/login" className="custom-link">
              Sign In
            </Link>
          </div>
          <div>
            <Link to="/register" className="custom-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
