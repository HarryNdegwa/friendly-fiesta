import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { getCar } from "../redux/reducers/api/car";

export default function Car() {
  const [car, setCar] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const carId = parseInt(location.pathname.split("/")[2], 10);

  useEffect(() => {
    const getData = async () => {
      if (carId) {
        const response = await dispatch(getCar(carId));
        setCar({ ...response });
      }
    };
    getData();
  }, [dispatch]);

  return (
    <div>
      <h3>Car here</h3>
    </div>
  );
}
