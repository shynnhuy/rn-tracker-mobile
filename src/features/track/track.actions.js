import { navigate } from "../../utils/navigation";
import { CREATE_TRACK, FETCH_TRACKS } from "./track.constants";

const actionFetchTracks = () => ({ type: FETCH_TRACKS.PENDING });
const actionFetchTracksSuccess = (payload) => ({ type: FETCH_TRACKS.SUCCESS, payload });
const actionFetchTracksError = (payload) => ({ type: FETCH_TRACKS.ERROR, payload });

export const fetchTracks =
  () =>
  async (dispatch, _, { api }) => {
    try {
      dispatch(actionFetchTracks());
      const { data } = await api.get("/tracks");
      dispatch(actionFetchTracksSuccess(data.result));
    } catch (error) {
      dispatch(actionFetchTracksError(error.response.data));
    }
  };

const actionCreateTrack = () => ({ type: CREATE_TRACK.PENDING });
const actionCreateTrackSuccess = (payload) => ({ type: CREATE_TRACK.SUCCESS, payload });
const actionCreateTrackError = (payload) => ({ type: CREATE_TRACK.ERROR, payload });

export const createTrack =
  (name, locations) =>
  async (dispatch, _, { api }) => {
    try {
      dispatch(actionCreateTrack());
      const { data } = await api.post("/tracks", { name, locations });
      dispatch(actionCreateTrackSuccess(data.result));
      navigate("TrackList");
    } catch (error) {
      dispatch(actionCreateTrackError(error.response.data));
    }
  };
