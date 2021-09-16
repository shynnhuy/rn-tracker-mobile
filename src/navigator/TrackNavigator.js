import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TrackListScreen } from "../screens/TrackListScreen";
import { TrackDetailScreen } from "../screens/TrackDetailScreen";

const Track = createNativeStackNavigator();

export const TrackNavigator = () => {
  return (
    <Track.Navigator>
      <Track.Screen name="TrackList" component={TrackListScreen} />
      <Track.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Track.Navigator>
  );
};
