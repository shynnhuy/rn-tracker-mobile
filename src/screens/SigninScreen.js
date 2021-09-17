import React, { useCallback } from "react";
import { StyleSheet, View, Button as RNButton } from "react-native";
import { useAuthContext } from "../context/auth/auth.context";
import { AuthForm } from "../components/AuthForm";
import { useFocusEffect } from "@react-navigation/core";

export const SigninScreen = ({ navigation: { navigate } }) => {
  const { state, signIn, clearAllError } = useAuthContext();
  useFocusEffect(
    useCallback(() => {
      return () => {
        clearAllError();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        error={state.error}
        header="Sign in"
        submitAction={signIn}
        submitBtnText="Sign In"
      />
      <RNButton
        onPress={() => navigate("Signup")}
        title="Don't have an account? Sign up now"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
