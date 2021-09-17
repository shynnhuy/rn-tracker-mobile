import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { useLocationContext } from "../context/location/location.context";

export const Map = () => {
  const {
    state: { currentLocation },
  } = useLocationContext();

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View style={styles.container}>
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
        {/* <Polyline coordinates={points} /> */}
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158, 158, 255, 1)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});
