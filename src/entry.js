import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";

import { Provider as AuthProvider } from "./context/auth";
import { Provider as LocationProvider } from "./context/location";
import { Provider as TrackProvider } from "./context/track";
import { App } from "./App";
import { navigationRef } from "./utils";
import { StatusBar } from "expo-status-bar";

const Root = () => {
  return (
    <TrackProvider>
      <AuthProvider>
        <LocationProvider>
          <NavigationContainer ref={navigationRef}>
            <ThemeProvider>
              <App />
              <StatusBar style="dark" />
            </ThemeProvider>
          </NavigationContainer>
        </LocationProvider>
      </AuthProvider>
    </TrackProvider>
  );
};

registerRootComponent(Root);
