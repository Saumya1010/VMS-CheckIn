import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import HostName from "./HostName";
import { setVisitor, submitVisit } from "../actions/visitorAction";

const SelectHost = (props) => {
  const [host, setHost] = useState("");
  const [doRedirect, setRedirect] = useState();

  const onHostChange = (e, value) => {
    setHost(value);
  };

  const handleNextClick = () => {
    props.setVisitor({ host });
    props.submitVisit();
    setRedirect("/thankYou");
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
        className="main-heading"
        style={{ maxWidth: "700px" }}
      >
        Who are you visiting? <br /> We'll help you to notify your host.
      </Typography>
      <form>
        <div className="host-name">
          <HostName onChange={onHostChange} />
        </div>
        <div className="back-next-button">
          <Button
            color="primary"
            variant="outlined"
            size="large"
            onClick={() => setRedirect("/photo")}
            style={{ borderRadius: "20px", marginRight: "20px" }}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleNextClick}
            style={{ borderRadius: "20px" }}
            disabled={!host}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { setVisitor, submitVisit })(SelectHost);
