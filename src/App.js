import React, { useEffect } from "react";
import { useAuthContext } from "./context/auth/auth.context";
import { AuthNavigator } from "./navigator/AuthNavigator";
import { MainNavigator } from "./navigator/MainNavigator";

export const App = () => {
  const { state, tryLocalSignIn } = useAuthContext();

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return Boolean(state.token) ? <MainNavigator /> : <AuthNavigator />;
};
