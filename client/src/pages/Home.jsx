import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CarCard from "../components/CarCard";
import { getCars } from "../redux/reducers/api/car";

export default function Home() {
  const [cars, setCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      let _cars = await dispatch(getCars());
      console.log(`_cars`, _cars);
      setCars([..._cars]);
    };
    getData();
  }, [dispatch]);

  return (
    <div className="container">
      <h3>Home</h3>
      {cars.map((car) => (
        <CarCard data={car} key={car.id} />
      ))}
    </div>
  );
}
