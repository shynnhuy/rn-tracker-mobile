import { ADD_CUR_LOCATION } from "./location.constants";

export const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_CUR_LOCATION:
      return { ...state, currentLocation: payload };
    default:
      return state;
  }
};
