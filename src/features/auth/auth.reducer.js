import { SIGN_IN, SIGN_UP, CLEAR_ERROR, SIGN_OUT } from "./auth.constants";

const initialState = {
  isSignedIn: false,
  isLoading: false,
  token: null,
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN.PENDING:
      return { ...state, isLoading: true };
    case SIGN_IN.SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        error: null,
      };
    case SIGN_IN.ERROR:
      return { ...state, isLoading: false, token: null, error: payload };

    case SIGN_UP.PENDING:
      return { ...state, isLoading: true };
    case SIGN_UP.SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        error: null,
      };
    case SIGN_UP.ERROR:
      return {
        ...state,
        isLoading: false,
        token: null,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case SIGN_OUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
