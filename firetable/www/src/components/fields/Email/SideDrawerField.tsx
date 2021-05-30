import React from "react";
import { Controller } from "react-hook-form";
import { ISideDrawerFieldProps } from "../types";

import { TextField } from "@material-ui/core";

export default function Email({
  control,
  column,
  disabled,
}: ISideDrawerFieldProps) {
  return (
    <Controller
      control={control}
      name={column.key}
      render={({ onChange, onBlur, value }) => {
        return (
          <TextField
            variant="filled"
            fullWidth
            margin="none"
            placeholder={column.name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            id={`sidedrawer-field-${column.key}`}
            label=""
            hiddenLabel
            disabled={disabled}
            inputProps={{
              autoComplete: "email",
              maxLength: column.config?.maxLength,
            }}
          />
        );
      }}
    />
  );
}
