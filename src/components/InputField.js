import React from "react";
import { useField, splitFormProps } from "react-form";
import TextField from "@material-ui/core/TextField";

const InputField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  const {
    meta: { error, isTouched },
    getInputProps,
  } = useField(field, fieldOptions);

  return (
    <>
      <TextField
        fullWidth
        {...getInputProps({ ref, ...rest })}
        error={isTouched && error}
        helperText={error}
      />
    </>
  );
});

export default InputField;
