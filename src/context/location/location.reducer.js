import {
  ADD_CUR_LOCATION,
  ADD_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  CHANGE_NAME,
  RESET,
} from "./location.constants";

export const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_CUR_LOCATION:
      return { ...state, currentLocation: payload };

    case START_RECORDING:
      return { ...state, recording: true };

    case STOP_RECORDING:
      return { ...state, recording: false };

    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, payload] };

    case CHANGE_NAME:
      return { ...state, name: payload };

    case RESET:
      return { ...state, name: "", locations: [] };

    default:
      return state;
  }
};
