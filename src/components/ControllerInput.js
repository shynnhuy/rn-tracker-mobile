import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "react-native-elements";

export const ControllerInput = ({
  name,
  label,
  control,
  required = false,
  ...inputProps
}) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          label={label}
          {...inputProps}
        />
      )}
      name={name}
      rules={{ required }}
    />
  );
};
