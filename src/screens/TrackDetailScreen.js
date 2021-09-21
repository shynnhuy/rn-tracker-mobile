import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { Spacer } from "../components/Spacer";

export const TrackDetailScreen = ({ route: { params } }) => {
  const records = useSelector((state) => state.track.records);
  const { _id } = params;

  const track = records.find((item) => item._id === _id);
  const inititalCoord = track.locations[0].coords;

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...inititalCoord,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={track.locations.map((location) => location.coords)} />
      </MapView>
      <Spacer>
        <Text h2>Track name: {track.name}</Text>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
