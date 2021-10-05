import React from "react";

export default function AuthForm({ text }) {
  return (
    <form className="col-md-5 mx-auto">
      <div className="mb-3 row">
        <label for="username" className="col-form-label">
          Username
        </label>
        <div>
          <input type="text" className="form-control" id="username" required />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="password" className="col-form-label mb-0">
          Password
        </label>
        <div>
          <input
            type="password"
            className="form-control"
            required
            id="password"
          />
        </div>
      </div>

      <div>
        <button className="btn btn-block bg-secondary">{text}</button>
      </div>
    </form>
  );
}
