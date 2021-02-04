import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { useForm, useField, splitFormProps } from "react-form";

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions);

  // Build the field
  return (
    <>
      <TextField fullWidth {...getInputProps({ ref, ...rest })} />

      {/*
        Let's inline some validation and error information
        for our field
      */}

      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <strong>{error}</strong>
      ) : message ? (
        <small>{message}</small>
      ) : null}
    </>
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Info() {
  const classes = useStyles();

  const defaultValues = React.useMemo(
    () => ({
      email: "",
    }),
    []
  );

  const {
    Form,
    values,
    pushFieldValue,
    removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error },
  } = useForm({
    defaultValues,
    validate: (values) => {
      // if (values.name === "tanner" && values.age !== "29") {
      //   return "This is not tanner's correct age";
      // }
      return false;
    },
    onSubmit: async (values, instance) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);
    },
    debugForm: false,
  });

  return (
    <div className="align-center">
      <h1>Tell us about yourself.</h1>
      <Form>
        <Grid
          container
          spacing={3}
          style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}
        >
          <Grid item xs={12} md={6}>
            <InputField
              field="email"
              name="email"
              variant="outlined"
              label="Email id"
              required
              // validate={(value) => (!value ? "Required" : false)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              required
              label="Phone number"
              variant="outlined"
              name="phone"
              field="phone"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              field="first-name"
              name="first-name"
              variant="outlined"
              label="First Name"
              required
              // validate={(value) => (!value ? "Required" : false)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              required
              label="Last Name"
              variant="outlined"
              name="last-name"
              field="last-name"
              required
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
