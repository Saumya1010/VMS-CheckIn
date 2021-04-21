import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ThankYouHost = (props) => {
  // const [doRedirect, setRedirect] = useState();

  // // const handleDoneClick = () => {
  // //   // props.clearVisitor();
  // //   setRedirect("/");
  // // };

  // if (doRedirect) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: doRedirect,
  //       }}
  //     />
  //   );
  // }

  return (
    <div className="ui container">
      <div>
        <CheckCircleIcon
          style={{
            width: "200px",
            height: "200px",
            marginLeft: "350px",
            marginTop: "150px",
            color: "cornflowerblue",
          }}
          fontSize="large"
        />
      </div>
      <div
        className="thankyou-text"
        style={{ marginTop: "-220px", marginLeft: "650px" }}
      >
        <h1 style={{ fontSize: "48px", lineHeight: "1.2" }}>
          Thanks! <br />
        </h1>
        <p style={{ fontSize: "28px" }}>
          We are conveying <br />
          your reply to Visitor.
        </p>
      </div>
      <div className="align-center">
        {/* <Button
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
        </Button> */}
      </div>
    </div>
  );
};

export default connect(null, {})(ThankYouHost);
