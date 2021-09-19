import React from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { useLocationContext } from "../context/location/location.context";
import useSaveTrack from "../hooks/useSaveTrack";
import { ControllerInput } from "./ControllerInput";
import { Spacer } from "./Spacer";

export const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useLocationContext();
  const [saveTrack] = useSaveTrack();

  // console.log(locations.length);
  return (
    <Spacer>
      <Input
        value={name}
        onChangeText={changeName}
        placeholder="Enter your track name"
      />
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button
          title="Start Recording"
          onPress={startRecording}
          type="outline"
        />
      )}
      <Spacer />
      {!recording && Boolean(locations.length) && (
        <Button title="Save Recording" onPress={saveTrack} />
      )}
    </Spacer>
  );
};

const styles = StyleSheet.create({});
