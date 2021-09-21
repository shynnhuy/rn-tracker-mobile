import React, { useCallback } from "react";
import { StyleSheet, View, Button as RNButton } from "react-native";
import { AuthForm } from "../components/AuthForm";
import { useFocusEffect } from "@react-navigation/core";
import { clearAllError, signUp } from "../features/auth";
import { useDispatch, useSelector } from "react-redux";

export const SignupScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(clearAllError());
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        error={auth.error}
        header="Sign up for Tracker"
        submitAction={(data) => dispatch(signUp(data))}
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
