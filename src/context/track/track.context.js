import { useContext } from "react";
import { createDataContext } from "../createDataContext";
import { createTrack, fetchTracks } from "./track.actions";
import { trackReducer } from "./track.reducer";

const initialState = [];

export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTracks },
  initialState
);

export const useTrackContext = () => useContext(Context);
