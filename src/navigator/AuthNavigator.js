import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupScreen } from "../screens/SignupScreen";
import { SigninScreen } from "../screens/SigninScreen";

const Auth = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Signup" component={SignupScreen} />
      <Auth.Screen name="Signin" component={SigninScreen} />
    </Auth.Navigator>
  );
};
