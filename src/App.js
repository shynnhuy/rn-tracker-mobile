import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryLocalSignIn } from "./features/auth";
import { AuthNavigator } from "./navigator/AuthNavigator";
import { MainNavigator } from "./navigator/MainNavigator";

export const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(tryLocalSignIn());
  }, [dispatch]);

  return Boolean(auth.token) ? <MainNavigator /> : <AuthNavigator />;
};
