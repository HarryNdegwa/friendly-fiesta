import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login, register } from "../redux/reducers/api/auth";

export default function AuthForm({ text, values, setValues }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (text === "Login") {
      await dispatch(login(values));
    } else {
      await dispatch(register(values));
    }
    setLoading(false);
    history.push("/");
  };

  return (
    <form className="col-md-5 mx-auto" onSubmit={handleSubmit} method="POST">
      <div className="mb-3 row">
        <label htmlFor="username" className="col-form-label">
          Username
        </label>
        <div>
          <input
            type="text"
            className="form-control"
            id="username"
            required
            values={values.username}
            onChange={handleChange}
            name="username"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="password" className="col-form-label mb-0">
          Password
        </label>
        <div>
          <input
            type="password"
            className="form-control"
            required
            id="password"
            values={values.password}
            onChange={handleChange}
            name="password"
          />
        </div>
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-secondary" type="submit" disabled={loading}>
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            text
          )}
        </button>
      </div>
    </form>
  );
}
