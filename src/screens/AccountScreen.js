import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Spacer } from "../components/Spacer";
import { useAuthContext } from "../context/auth/auth.context";

export const AccountScreen = () => {
  const { signOut } = useAuthContext();
  return (
    <Spacer>
      <Button title="Sign Out" onPress={signOut} />
    </Spacer>
  );
};

const styles = StyleSheet.create({});
