import api from "../api";
import {
  LOGOUT,
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../constants/authConstants";

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_IN_REQUEST });
    const { data } = await api.post("/auth/local/login", {
      email,
      password,
    });
    // console.log(data);
    dispatch({ type: SIGN_IN_SUCCESS, payload: data });
  } catch (error) {
    throw new Error(
      error.response.data.message
        ? error.response.data.message
        : "Something went wrong"
    );
  }
};

export const signOut = () => {
  return { type: LOGOUT };
};
