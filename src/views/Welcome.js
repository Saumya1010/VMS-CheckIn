import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const Welcome = (props) => {
  const [doRedirect, setRedirect] = useState();

  const handleCheckinClick = () => {
    setRedirect("info");
  };

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
      <Typography
        variant="h1"
        component="h1"
        className="main-heading extra-large"
      >
        Welcome to LDRP Gandhinagar Campus!
      </Typography>
      <Button
        className="button-style"
        style={{
          borderRadius: "20px",
          marginTop: "100px",
        }}
        color="primary"
        variant="contained"
        size="large"
        onClick={handleCheckinClick}
      >
        Check in
      </Button>
    </div>
  );
};

export default Welcome;
