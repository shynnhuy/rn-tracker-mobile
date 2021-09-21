import { combineReducers } from "redux";
import { authReducer } from "../features/auth";
import { locationReducer } from "../features/location";
import { trackReducer } from "../features/track";

export const rootReducer = combineReducers({
  auth: authReducer,
  track: trackReducer,
  location: locationReducer,
});
