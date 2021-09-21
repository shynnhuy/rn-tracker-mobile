import { api } from "../../app/api";
import { navigate } from "../../utils/navigation";
import { CREATE_TRACK, FETCH_TRACKS } from "./track.constants";

export const fetchTracks = (dispatch) => async () => {
  try {
    dispatch({ type: FETCH_TRACKS.PENDING });
    const { data } = await api.get("/tracks");
    dispatch({ type: FETCH_TRACKS.SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: FETCH_TRACKS.ERROR });
  }
};
export const createTrack = (dispatch) => async (name, locations) => {
  try {
    dispatch({ type: CREATE_TRACK.PENDING });
    const { data } = await api.post("/tracks", { name, locations });
    dispatch({ type: CREATE_TRACK.SUCCESS, payload: data.result });
    navigate("TrackList");
  } catch (error) {
    dispatch({ type: CREATE_TRACK.ERROR });
  }
};
