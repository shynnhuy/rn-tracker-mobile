// import "../utils/_mockLocations";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { Map } from "../components/Map";
import { Text } from "react-native-elements";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/core";
import { TrackForm } from "../components/TrackForm";
import { useLocationContext } from "../context/location";

export const TrackCreateScreen = () => {
  const {
    state: { recording },
    addLocation,
  } = useLocationContext();

  const isFocused = useIsFocused();

  const callback = useCallback((location) => addLocation(location, recording), [recording]);
  const [error] = useLocation(isFocused || recording, callback);

  return (
    <View style={styles.container}>
      <Map error={error} />
      {Boolean(error) ? (
        <Text style={styles.errorText}>Please enable location permission.</Text>
      ) : (
        <TrackForm />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  errorText: {
    textAlign: "center",
    marginTop: 5,
    color: "red",
    fontSize: 22,
  },
});
