import {
  ADD_CUR_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
  CHANGE_NAME,
  RESET,
} from "./location.constants";

export const addLocation = (location, recording) => (dispatch) => {
  dispatch({ type: ADD_CUR_LOCATION, payload: location });
  if (recording) {
    dispatch({ type: ADD_LOCATION, payload: location });
  }
};

export const startRecording = () => ({ type: START_RECORDING });

export const stopRecording = () => ({ type: STOP_RECORDING });

export const changeName = (name) => ({ type: CHANGE_NAME, payload: name });

export const reset = () => ({ type: RESET });
