import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import PersonIcon from "@material-ui/icons/Person";

import VisitBlock from "../components/VisitBlock";
import { setVisitor } from "../actions/visitorAction";

const VisitType = (props) => {
  const [visitType, setVisitType] = useState("");
  const [doRedirect, setRedirect] = useState();

  const handleVisitClick = (visitType) => {
    console.log({ visitType });
    setVisitType(visitType);
  };

  const handleNextClick = () => {
    props.setVisitor({ visitType });
    setRedirect("/welcome");
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
      <Typography variant="h1" component="h1" className="main-heading">
        What brings you here?
      </Typography>
      <div className="visit-wrapper">
        <VisitBlock
          icon={
            <BusinessIcon
              style={{ height: "100px", width: "100px", color: "#337cf6" }}
            />
          }
          title="Business Visit"
          description="Guest who come and visit office for business activities or job interviews."
          active={visitType === "business"}
          handleVisitClick={() => handleVisitClick("business")}
        />
        <VisitBlock
          icon={
            <PersonIcon
              style={{ height: "100px", width: "100px", color: "#337cf6" }}
            />
          }
          title="Personal Visit"
          description="Friends and family of employees who come and visit them in the office."
          active={visitType === "personal"}
          handleVisitClick={() => handleVisitClick("personal")}
        />
      </div>

      <div className="back-next-button">
        <Button
          className="next-button"
          color="primary"
          variant="contained"
          size="large"
          style={{
            borderRadius: "20px",
          }}
          disabled={!visitType}
          onClick={handleNextClick}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default connect(null, { setVisitor })(VisitType);
