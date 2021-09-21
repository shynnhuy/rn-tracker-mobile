import { CREATE_TRACK, FETCH_TRACKS } from "./track.constants";

const initialState = {
  loading: false,
  records: [],
  error: null,
};

export const trackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TRACKS.PENDING: {
      return { ...state, loading: true };
    }
    case FETCH_TRACKS.SUCCESS: {
      return { ...state, loading: false, error: null, records: payload };
    }
    case FETCH_TRACKS.ERROR: {
      return { ...state, loading: false, error: payload.message };
    }

    case CREATE_TRACK.PENDING:
      return { ...state, loading: true };
    case CREATE_TRACK.SUCCESS:
      return { ...state, loading: false, error: null, records: [...state.records, payload] };
    case CREATE_TRACK.ERROR:
      return { ...state, loading: false, error: payload.message };
    default:
      return state;
  }
};
