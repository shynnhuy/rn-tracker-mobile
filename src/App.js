import React from "react";
import { useAuthContext } from "./context/auth/auth.context";
import { AuthNavigator } from "./navigator/AuthNavigator";
import { MainNavigator } from "./navigator/MainNavigator";

export const App = () => {
  const { state } = useAuthContext();

  return !state.isSignIn ? <MainNavigator /> : <AuthNavigator />;
};
