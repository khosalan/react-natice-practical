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
      return { ...state, loading: true, services: [], skip: 0 };

    case SERVICE_LIST_SUCCESS:
      // console.log(state.services);
      const updatedServices = state.services.concat(action.payload.services);
      return {
        ...state,
        loading: false,
        services: updatedServices,
        skip: state.skip + 10,
      };
    default:
      return state;
  }
};
