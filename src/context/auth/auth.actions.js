import { api } from "../../api";
import { SIGN_IN } from "./auth.constants";

export const authActions = {
  signIn:
    (dispatch) =>
    async ({ email, password }) => {
      try {
        dispatch({ type: SIGN_IN.PENDING });
        const { data } = await api.post("/auth/signin", { email, password });
        console.log(data);
        dispatch({ type: SIGN_IN.SUCCESS, payload: data.result });
      } catch (error) {
        dispatch({ type: SIGN_IN.ERROR });
      }
    },
};
