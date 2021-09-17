import { useContext } from "react";
import { createDataContext } from "../createDataContext";
import {
  signIn,
  signUp,
  clearAllError,
  tryLocalSignIn,
  signOut,
} from "./auth.actions";
import { authReducer } from "./auth.reducer";

const initialState = {
  isSignedIn: false,
  isLoading: false,
  token: null,
  error: null,
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signUp, clearAllError, tryLocalSignIn, signOut },
  initialState
);

export const useAuthContext = () => useContext(Context);
