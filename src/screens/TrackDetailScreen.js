import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { Spacer } from "../components/Spacer";
import { useTrackContext } from "../context/track";

export const TrackDetailScreen = ({ route: { params } }) => {
  const { state } = useTrackContext();
  const { _id } = params;

  const track = state.find((item) => item._id === _id);
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
        <Polyline
          coordinates={track.locations.map((location) => location.coords)}
        />
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
