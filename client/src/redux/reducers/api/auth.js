import axios from "../../../axiosConfig";
import { setQid } from "../auth";

export const register = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/register", data);

    if (response.status === 200) {
      dispatch(setQid(response.data.token));
    }
  } catch (error) {
    console.log(`error`, error);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/login", data);

    if (response.status === 200) {
      dispatch(setQid(response.data.token));
    }
  } catch (error) {
    console.log(`error`, error);
  }
};
