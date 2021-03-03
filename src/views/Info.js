import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

import { useForm } from "react-form";
import InputField from "../components/InputField";
import { setVisitor } from "../actions/visitorAction";

import validator from "validator";

const Info = (props) => {
  const classes = useStyles();

  const [isValid, setIsValid] = useState(false);
  const [doRedirect, setRedirect] = useState();

  const defaultValues = React.useMemo(
    () => ({
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
    }),
    []
  );

  const {
    Form,
    meta: { isSubmitting, isSubmitted, canSubmit, error },
  } = useForm({
    defaultValues,
    validate: (values) => {
      console.log("validate---", values);
      setIsValid(canSubmit);
      return true;
    },
    onSubmit: (values, instance) => {
      console.log("submit ----", values);
      if (isValid) {
        props.setVisitor(values);
        setRedirect("/photo");
      }
    },
    debugForm: false,
  });

  if (doRedirect) {
    return (
      <Redirect
        to={{
          pathname: doRedirect,
        }}
      />
    );
  }
  return (
    <div className="align-center">
      <Typography variant="h1" component="h1" className="main-heading">
        Tell us about yourself.
      </Typography>
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
              validate={(value) => {
                if (!value) {
                  return "Email is required";
                }
                if (!validateEmail(value)) {
                  return "Please enter a valid email addresss";
                }
                return false;
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              required
              label="Phone number"
              variant="outlined"
              name="phone"
              field="phone"
              validate={(value) => {
                if (!value) {
                  return "Phone Number is required";
                }
                if (!validatePhone(value)) {
                  return "Please enter a valid Phone Number";
                }
                return false;
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              field="firstName"
              name="firstName"
              variant="outlined"
              label="First Name"
              required
              validate={(value) => {
                if (!value) {
                  return "First Name is required";
                }
                if (!validateName(value)) {
                  return "Please enter only letters";
                }

                if (value && value.length < 3) {
                  return "Your name should atleast be three letters";
                }
                return false;
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              required
              label="Last Name"
              variant="outlined"
              name="lastName"
              field="lastName"
              validate={(value) => {
                if (!value) {
                  return "Last Name is required";
                }
                if (!validateName(value)) {
                  return "Please enter only letters";
                }

                if (value && value.length < 3) {
                  return "Your name should atleast be three letters";
                }
                return false;
              }}
            />
          </Grid>
          <div className="back-next-button">
            <Button
              color="primary"
              variant="outlined"
              size="large"
              href="/welcome"
              style={{ borderRadius: "20px" }}
            >
              Back
            </Button>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              size="large"
              style={{ borderRadius: "20px" }}
            >
              Next
            </Button>
          </div>
        </Grid>
      </Form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // "& .MuiTextField-root": {
    //   margin: theme.spacing(1),
    //   width: "25ch",
    // },
  },
}));

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(number) {
  const isValidPhoneNumber = validator.isMobilePhone(number);
  return isValidPhoneNumber;
}

function validateName(name) {
  var letters = /^[A-Za-z]+$/;
  return letters.test(String(name).toUpperCase());
}

export default connect(null, { setVisitor })(Info);
