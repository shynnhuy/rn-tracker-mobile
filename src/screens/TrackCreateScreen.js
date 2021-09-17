import "../utils/_mockLocations";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Map } from "../components/Map";
import { Text } from "react-native-elements";
import { useLocationContext } from "../context/location/location.context";

export const TrackCreateScreen = () => {
  const [error, setError] = useState(null);
  const { addLocation } = useLocationContext();

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => addLocation(location)
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <>
      <Map />
      {Boolean(error) && <Text>Please enable location permission.</Text>}
    </>
  );
};

const styles = StyleSheet.create({});
