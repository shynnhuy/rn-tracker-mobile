import { useFocusEffect } from "@react-navigation/core";
import React, { useCallback } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Spacer } from "../components/Spacer";
import { fetchTracks } from "../features/track";

export const TrackListScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const track = useSelector((state) => state.track);
  useFocusEffect(
    useCallback(() => {
      dispatch(fetchTracks());

      // return () => console.log("BLUR");
    }, [dispatch])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigate("TrackDetail", { _id: item._id })}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  const EmptyList = () => (
    <Spacer>
      <Text>You don't have any track record. Create one</Text>
    </Spacer>
  );

  if (track.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <FlatList
        data={track.records}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
