import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { useLocationContext } from "../context/location/location.context";

export const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useLocationContext();

  const drawLine = locations.map((location) => location.coords);

  if (!currentLocation) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      <Polyline coordinates={drawLine} />
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
