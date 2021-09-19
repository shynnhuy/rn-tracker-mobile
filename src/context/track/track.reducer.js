import { CREATE_TRACK, FETCH_TRACKS } from "./track.constants";

export const trackReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_TRACKS.SUCCESS: {
      return payload;
    }

    case CREATE_TRACK.SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};
