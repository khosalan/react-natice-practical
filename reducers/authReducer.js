import {
  LOGOUT,
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../constants/authConstants";

const initialState = {
  email: "",
  userId: "",
  ownerAccessToken: "",
  isVerified: false,
  isOwner: false,
  isExpert: false,
  customerAccessToken: "",
  expertAccessToken: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state };

    case SIGN_IN_SUCCESS:
      //   console.log(action.payload);
      const {
        userId,
        ownerAccessToken,
        isVerified,
        customerAccessToken,
      } = action.payload;
      return { userId, customerAccessToken };

    case SIGN_IN_FAIL:
      return { ...initialState, error: action.payload };

    case LOGOUT: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
