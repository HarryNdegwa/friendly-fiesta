import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getCar } from "../redux/reducers/api/car";
import Carousel from "react-bootstrap/Carousel";
import { getMe } from "../redux/reducers/api/auth";
import { Link } from "react-router-dom";

export default function Car() {
  const [car, setCar] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const carId = parseInt(location.pathname.split("/")[2], 10);
  const [me, setMe] = useState(null);
  const { qid: token } = useSelector((state) => state.auth);

  useEffect(() => {
    const getData = async () => {
      if (carId) {
        const response = await dispatch(getCar(carId));
        if (response) {
          setCar({ ...response });
        }
        setCar({ ...response });
        const response2 = await dispatch(getMe());
        if (response2) {
          setMe({ ...response2 });
        }
      }
    };
    getData();
  }, [dispatch]);

  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          {car &&
            car.images &&
            car.images.map((img, idx) => (
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 carousel-img"
                  src={img}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
      <div className="row m-0 mt-4">
        <div className="col-md-8 mx-auto">
          <div className="d-flex align-items-center justify-content-between">
            <h3>{car && car.name}</h3>

            {car && me && car.UserId === me.id && (
              <Link to={`/update-car/${car && car.id}`}>Edit Car</Link>
            )}
          </div>
          <ul>
            <li>Make:{car && car.make}</li>
            <li>Model:{car && car.model}</li>
            <li>Year:{car && car.year}</li>
          </ul>

          {token && <p>Car location: {car && car.location}</p>}
        </div>
      </div>
    </div>
  );
}
