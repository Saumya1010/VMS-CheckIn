import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";

import WebcamCapture from "../components/WebcamCapture";
import ImageWithRetake from "../components/ImageWithRetake";
import { setVisitor } from "../actions/visitorAction";

const Photo = (props) => {
  const [photo, setPhoto] = useState("");
  const [doRedirect, setRedirect] = useState();

  const handlePhotoClick = (photoSrc) => {
    console.log("photo: ", photoSrc);
    setPhoto(photoSrc);
  };

  const handleRetakeClick = () => {
    setPhoto("");
  };

  const handleNextClick = () => {
    props.setVisitor({ photo });
    setRedirect("/selectHost");
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
        Let's snap a photo!
      </Typography>
      <div style={{ marginBottom: 40 }}>
        {photo ? (
          <ImageWithRetake
            handleRetakeClick={handleRetakeClick}
            photo={photo}
          />
        ) : (
          <WebcamCapture handlePhotoClick={handlePhotoClick} />
        )}
      </div>
      <div className="back-next-button">
        <form>
          <Button
            color="primary"
            variant="outlined"
            size="large"
            style={{ borderRadius: "20px" }}
            onClick={() => setRedirect("/info")}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleNextClick}
            style={{ borderRadius: "20px" }}
            disabled={!photo}
          >
            Next
          </Button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { setVisitor })(Photo);
