import api from "../api";
import {
  SERVICE_LIST_FAIL,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from "../constants/serviceConstant";

export const listServices = () => async (dispatch, getState) => {
  let skip = getState().serviceList.skip;
  console.log(skip);
  try {
    dispatch({ type: SERVICE_LIST_REQUEST });

    const { data } = await api.get(`/services?skip=${skip}&take=10`);
    dispatch({
      type: SERVICE_LIST_SUCCESS,
      payload: { services: data.services },
    });
    // console.log(data.services);
  } catch (error) {
    console.log(error);
    dispatch({ type: SERVICE_LIST_FAIL, payload: "error" });
  }
};
