import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";

import { Provider as AuthProvider } from "./context/auth";
import { Provider as LocationProvider } from "./context/location";
import { App } from "./App";
import { navigationRef } from "./utils";

const Root = () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <NavigationContainer ref={navigationRef}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </NavigationContainer>
      </LocationProvider>
    </AuthProvider>
  );
};

registerRootComponent(Root);
