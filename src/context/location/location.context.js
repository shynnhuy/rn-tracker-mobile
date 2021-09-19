import { useContext } from "react";
import { createDataContext } from "../createDataContext";
import { locationReducer } from "./location.reducer";
import {
  addLocation,
  startRecording,
  stopRecording,
  changeName,
  reset,
} from "./location.actions";

const initialState = {
  name: "",
  recording: false,
  locations: [],
  currentLocation: null,
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { addLocation, startRecording, stopRecording, changeName, reset },
  initialState
);

export const useLocationContext = () => useContext(Context);
