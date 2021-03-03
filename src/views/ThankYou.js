import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { clearVisitor } from "../actions/visitorAction";

const ThankYou = (props) => {
  const [doRedirect, setRedirect] = useState();

  const handleDoneClick = () => {
    props.clearVisitor();
    setRedirect("/");
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
    <div className="ui container">
      <div>
        <CheckCircleIcon
          style={{
            width: "200px",
            height: "200px",
            marginLeft: "300px",
            marginTop: "150px",
            color: "cornflowerblue",
          }}
          fontSize="large"
        />
      </div>
      <div
        className="thankyou-text"
        style={{ marginTop: "-250px", marginLeft: "600px" }}
      >
        <h1 style={{ fontSize: "48px", lineHeight: "1.2" }}>
          Thanks, <br />
          You're all set!
        </h1>
        <p style={{ fontSize: "28px" }}>
          Go to the front desk. <br />
          Remember to have your ID ready.
        </p>
      </div>
      <div className="align-center">
        <Button
          className="done-button"
          style={{
            borderRadius: "20px",
            marginLeft: "600px",
            marginTop: "50px",
            width: "120px",
          }}
          color="primary"
          variant="contained"
          size="large"
          onClick={handleDoneClick}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default connect(null, { clearVisitor })(ThankYou);
