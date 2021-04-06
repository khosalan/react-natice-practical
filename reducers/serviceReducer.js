import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from "../constants/serviceConstant";

const initialState = {
  services: [],
  skip: 0,
};

export default serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return { ...state, loading: true, services: [] };

    case SERVICE_LIST_SUCCESS:
      return {
        loading: false,
        services: state.services.concat(action.payload.services),
        // skip: state.skip + 10,
      };
    default:
      return state;
  }
};
