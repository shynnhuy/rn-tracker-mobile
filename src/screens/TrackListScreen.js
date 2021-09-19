import { useFocusEffect } from "@react-navigation/core";
import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { Spacer } from "../components/Spacer";
import { useTrackContext } from "../context/track";

export const TrackListScreen = ({ navigation: { navigate } }) => {
  const { state, fetchTracks } = useTrackContext();
  useFocusEffect(
    useCallback(() => {
      const getTracks = async () => {
        await fetchTracks();
      };
      // console.log("FOCUS");
      getTracks();

      // return () => console.log("BLUR");
    }, [])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigate("TrackDetail", { _id: item._id })}
    >
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
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
