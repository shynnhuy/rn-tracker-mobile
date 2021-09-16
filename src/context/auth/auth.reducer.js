import { SIGN_IN } from "./auth.constants";

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case SIGN_IN.PENDING:
      return { ...state, isLoading: true };
    case SIGN_IN.SUCCESS:
      return { ...state, isLoading: false, isSignIn: true };
    case SIGN_IN.ERROR:
      return { ...state, isLoading: false, isSignIn: false };
    default:
      return state;
  }
};
