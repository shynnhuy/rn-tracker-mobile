import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { Spacer } from "./Spacer";
import { ControllerInput } from "./ControllerInput";
import { useForm } from "react-hook-form";

export const AuthForm = ({ header, submitBtnText, submitAction, error }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => submitAction(data);

  return (
    <>
      <Spacer>
        <Text h1 style={{ textAlign: "center" }}>
          {header}
        </Text>
      </Spacer>
      <ControllerInput
        control={control}
        name="email"
        label="Email"
        keyboardType="email-address"
      />
      <ControllerInput
        control={control}
        name="password"
        label="Password"
        secureTextEntry
      />
      {Boolean(error) && <Text style={styles.errorMsg}>{error.message}</Text>}
      <Spacer>
        <Button title={submitBtnText} onPress={handleSubmit(onSubmit)} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMsg: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
  },
});
