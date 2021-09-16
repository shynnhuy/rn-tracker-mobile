import { useContext } from "react";
import { createDataContext } from "../createDataContext";
import { authActions } from "./auth.actions";
import { authReducer } from "./auth.reducer";

const initialState = {
  isSignedIn: false,
  isLoading: false,
};

export const { Context, Provider } = createDataContext(
  authReducer,
  authActions,
  initialState
);

export const useAuthContext = () => useContext(Context);
