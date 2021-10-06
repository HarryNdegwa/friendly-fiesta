import React from "react";
import { Link } from "react-router-dom";

export default function CarCard({ data }) {
  return (
    <Link
      to={`/car/${data.id}`}
      className="col-md-2 col-lg-4 car-list-link text-dark"
    >
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3>{data.name}</h3>
          <p className="m-0">Make:{data.make}</p>
          <p className="m-0">Model:{data.model}</p>
        </div>
      </div>
    </Link>
  );
}
