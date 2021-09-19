import {
  ADD_CUR_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
  CHANGE_NAME,
  RESET,
} from "./location.constants";

export const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: ADD_CUR_LOCATION, payload: location });
  if (recording) {
    dispatch({ type: ADD_LOCATION, payload: location });
  }
};

export const startRecording = (dispatch) => () => {
  dispatch({ type: START_RECORDING });
};

export const stopRecording = (dispatch) => () => {
  dispatch({ type: STOP_RECORDING });
};

export const changeName = (dispatch) => (name) => {
  dispatch({ type: CHANGE_NAME, payload: name });
};

export const reset = (dispatch) => () => {
  dispatch({ type: RESET });
};
