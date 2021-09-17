import { useContext } from "react";
import { createDataContext } from "../createDataContext";
import { addLocation } from "./location.actions";
import { locationReducer } from "./location.reducer";

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null,
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { addLocation },
  initialState
);

export const useLocationContext = () => useContext(Context);
