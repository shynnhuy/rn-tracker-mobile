import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useAuthContext } from "../context/auth/auth.context";

export const AccountScreen = () => {
  const { signOut } = useAuthContext();
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({});
