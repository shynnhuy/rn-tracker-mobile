import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { Spacer } from "../components/Spacer";
import { signOut } from "../features/auth";

export const AccountScreen = () => {
  const dispatch = useDispatch();
  return (
    <Spacer>
      <Button title="Sign Out" onPress={() => dispatch(signOut())} />
    </Spacer>
  );
};

const styles = StyleSheet.create({});
