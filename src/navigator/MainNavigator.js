import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { AccountScreen } from "../screens/AccountScreen";
import { TrackCreateScreen } from "../screens/TrackCreateScreen";
import { TrackNavigator } from "./TrackNavigator";

const Main = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        name="Tracks"
        component={TrackNavigator}
        options={{
          headerShown: !!!true,
          title: "Tracks",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "list-circle" : "list-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Main.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          title: "Add Track",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Main.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Main.Navigator>
  );
};
