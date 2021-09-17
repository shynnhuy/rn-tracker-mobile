import { ADD_CUR_LOCATION } from "./location.constants";

export const addLocation = (dispatch) => (location) => {
  dispatch({ type: ADD_CUR_LOCATION, payload: location });
};
