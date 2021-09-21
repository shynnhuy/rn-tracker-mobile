import React, { useCallback } from "react";
import { StyleSheet, View, Button as RNButton } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AuthForm } from "../components/AuthForm";
import { useFocusEffect } from "@react-navigation/core";
import { clearAllError, signIn } from "../features/auth";

export const SigninScreen = ({ navigation: { navigate } }) => {
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
        header="Sign in"
        submitAction={(data) => dispatch(signIn(data))}
        submitBtnText="Sign In"
      />
      <RNButton onPress={() => navigate("Signup")} title="Don't have an account? Sign up now" />
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
