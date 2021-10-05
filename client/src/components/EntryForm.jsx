import React from "react";

export default function EntryForm() {
  return (
    <form className="col-md-5 mx-auto">
      <div className="mb-3 row">
        <label for="name" className="col-form-label">
          Car Name
        </label>
        <div>
          <input type="text" className="form-control" id="name" required />
        </div>
      </div>{" "}
      <div className="mb-3 row">
        <label for="model" className="col-form-label">
          Model
        </label>
        <div>
          <input type="text" className="form-control" id="model" required />
        </div>
      </div>{" "}
      <div className="mb-3 row">
        <label for="make" className="col-form-label">
          Make
        </label>
        <div>
          <input type="text" className="form-control" id="make" required />
        </div>
      </div>{" "}
      <div className="mb-3 row">
        <label for="year" className="col-form-label">
          Year
        </label>
        <div>
          <input type="text" className="form-control" id="year" required />
        </div>
      </div>
      <div>
        <button className="btn btn-block bg-secondary">Publish</button>
      </div>
    </form>
  );
}
