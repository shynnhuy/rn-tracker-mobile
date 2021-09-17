import React, { useCallback, useEffect } from "react";
import { StyleSheet, View, Button as RNButton } from "react-native";
import { useAuthContext } from "../context/auth/auth.context";
import { AuthForm } from "../components/AuthForm";
import { useFocusEffect } from "@react-navigation/core";

export const SignupScreen = ({ navigation: { navigate } }) => {
  const { state, signUp, clearAllError } = useAuthContext();

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
        header="Sign up for Tracker"
        submitAction={signUp}
        submitBtnText={"Sign Up"}
      />

      <RNButton
        onPress={() => navigate("Signin")}
        title="Already have and account? Sign in instead"
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
