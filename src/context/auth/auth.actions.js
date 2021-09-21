import { api } from "../../app/api";
import { getAccessToken, removeAccessToken, setAccessToken } from "../../utils";
import { CLEAR_ERROR, SIGN_IN, SIGN_UP, SIGN_OUT } from "./auth.constants";

export const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      dispatch({ type: SIGN_IN.PENDING });
      const { data } = await api.post("/auth/signin", { email, password });
      await setAccessToken(data.result);
      dispatch({ type: SIGN_IN.SUCCESS, payload: data.result });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: SIGN_IN.ERROR, payload: error.response.data });
    }
  };

export const signUp =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      dispatch({ type: SIGN_UP.PENDING });
      const { data } = await api.post("/auth/signup", { email, password });
      await setAccessToken(data.result);
      dispatch({ type: SIGN_UP.SUCCESS, payload: data.result });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: SIGN_UP.ERROR, payload: error.response.data });
    }
  };

export const clearAllError = (dispatch) => () => {
  dispatch({ type: CLEAR_ERROR });
};

export const tryLocalSignIn = (dispatch) => async () => {
  const token = await getAccessToken();
  if (Boolean(token)) {
    dispatch({ type: SIGN_IN.SUCCESS, payload: token });
  }
};

export const signOut = (dispatch) => async () => {
  await removeAccessToken();
  dispatch({ type: SIGN_OUT });
};
