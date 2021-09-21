import { getAccessToken, removeAccessToken, setAccessToken } from "../../utils";
import { CLEAR_ERROR, SIGN_IN, SIGN_UP, SIGN_OUT } from "./auth.constants";

const actionSignInPending = () => ({ type: SIGN_IN.PENDING });
const actionSignInSuccess = (payload) => ({ type: SIGN_IN.SUCCESS, payload });
const actionSignInError = (error) => ({ type: SIGN_IN.ERROR, payload: error });

export const signIn =
  ({ email, password }) =>
  async (dispatch, _, { api }) => {
    try {
      dispatch(actionSignInPending());
      const { data } = await api.post("/auth/signin", { email, password });
      await setAccessToken(data.result);
      dispatch(actionSignInSuccess(data.result));
    } catch (error) {
      dispatch(actionSignInError(error.response.data));
    }
  };

const actionSignUpPending = () => ({ type: SIGN_UP.PENDING });
const actionSignUpSuccess = (payload) => ({ type: SIGN_UP.SUCCESS, payload });
const actionSignUpError = (error) => ({ type: SIGN_UP.ERROR, payload: error });

export const signUp =
  ({ email, password }) =>
  async (dispatch, _, { api }) => {
    try {
      dispatch(actionSignUpPending());
      const { data } = await api.post("/auth/signup", { email, password });
      await setAccessToken(data.result);
      dispatch(actionSignUpSuccess(data.result));
    } catch (error) {
      dispatch(actionSignUpError(error.response.data));
    }
  };

export const clearAllError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

export const tryLocalSignIn = () => async (dispatch) => {
  const token = await getAccessToken();
  if (Boolean(token)) {
    dispatch({ type: SIGN_IN.SUCCESS, payload: token });
  }
};

export const signOut = () => async (dispatch) => {
  await removeAccessToken();
  dispatch({ type: SIGN_OUT });
};
