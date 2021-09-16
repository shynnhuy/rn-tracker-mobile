import React from "react";
import { registerRootComponent } from "expo";
import { App } from "./App";
import { Provider as AuthProvider } from "./context/auth";
import { NavigationContainer } from "@react-navigation/native";

const Root = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </AuthProvider>
  );
};

registerRootComponent(Root);
