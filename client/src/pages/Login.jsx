import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <div className="container pt-5">
      <h1 className="text-center my-3">Login to Mobihub</h1>
      <AuthForm text="Login" />
      <div className="col-md-5 mx-auto mt-3">
        <p>
          Don't have an account?<Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
