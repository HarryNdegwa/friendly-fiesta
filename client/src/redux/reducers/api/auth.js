import axios from "../../../axiosConfig";
import { authConfig } from "../../utilities/authConfig";
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

export const getMe = () => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let config = authConfig(token);

    const response = await axios.get("/me", {
      headers: { ...config },
    });

    return response.data;
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const getNewChatUsers = () => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let config = authConfig(token);

    const response = await axios.get("/get-new-chat-users", {
      headers: { ...config },
    });

    return response.data;
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const getChatUsers = () => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let config = authConfig(token);

    const response = await axios.get("/get-chat-users", {
      headers: { ...config },
    });

    return response.data;
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const createNewChat = (id) => async (_, getState) => {
  try {
    const token = getState().auth.qid;

    let config = authConfig(token);

    const response = await axios.post(
      `/create-new-chat/${id}`,
      {},
      {
        headers: { ...config },
      }
    );

    console.log(`response`, response);

    return response.data;
  } catch (error) {
    console.log(`error`, error.message);
  }
};
