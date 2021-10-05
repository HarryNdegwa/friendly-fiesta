import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import EntryForm from "../components/EntryForm";
import { getCar } from "../redux/reducers/api/car";

export default function UpdateEntry() {
  const location = useLocation();
  const [data, setData] = useState({});

  const carId = parseInt(location.pathname.split("/")[2], 10);

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      if (carId) {
        const response = await dispatch(getCar(carId));
        console.log(`response`, response);
        delete response.id;
        delete response.UserId;
        setData({ ...response });
      }
    };
    getData();
  }, [dispatch]);
  return (
    <div className="container mt-4">
      <h3 className="text-center">Update Entry</h3>
      <EntryForm edit data={data} carId={carId} />
    </div>
  );
}
