import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AccountScreen } from "../screens/AccountScreen";
import { TrackCreateScreen } from "../screens/TrackCreateScreen";
import { TrackNavigator } from "./TrackNavigator";

const Main = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Main.Navigator>
      <Main.Screen name="TrackFlow" component={TrackNavigator} />
      <Main.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Main.Screen name="Account" component={AccountScreen} />
    </Main.Navigator>
  );
};
