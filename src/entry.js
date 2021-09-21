import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";

import { Provider as LocationProvider } from "./context/location";
import { App } from "./App";
import { navigationRef } from "./utils";
import { configureStore } from "./app/store";

const { store, persistor } = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<ActivityIndicator size="large" />}>
        <LocationProvider>
          <NavigationContainer ref={navigationRef}>
            <ThemeProvider>
              <App />
              <StatusBar style="dark" />
            </ThemeProvider>
          </NavigationContainer>
        </LocationProvider>
      </PersistGate>
    </Provider>
  );
};

registerRootComponent(Root);
