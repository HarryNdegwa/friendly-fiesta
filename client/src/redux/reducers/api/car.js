import axios from "../../../axiosConfig";
import { authConfig } from "../../utilities/authConfig";

export const getCars = () => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let response;
    if (token) {
      let config = authConfig(token);
      response = await axios.get("/cars", {
        headers: { ...config },
      });
    } else {
      response = await axios.get("/cars");
    }

    console.log(`response`, response);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const getCar = (carId) => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let response;
    if (token) {
      let config = authConfig(token);
      response = await axios.get(`/car/${carId}`, {
        headers: { ...config },
      });
    } else {
      response = await axios.get(`/car/${carId}`);
    }

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(`error`, error);
  }
};

export const addCar = (data) => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let config = authConfig(token);
    let response = await axios.post(`/add-car`, data, {
      headers: { ...config },
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(`error`, error);
  }
};

export const uploadImage = (data) => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let config = authConfig(token);
    let response = await axios.post(`/add-image`, data, {
      headers: { ...config },
    });

    if (response.status === 200) {
      console.log(`response.data`, response.data);
      return response.data;
    }
  } catch (error) {
    console.log(`error`, error);
  }
};

export const updateCar = (carId, data) => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let config = authConfig(token);
    let response = await axios.put(`/update-car/${carId}`, data, {
      headers: { ...config },
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(`error`, error);
  }
};
