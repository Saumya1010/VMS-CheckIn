import React from "react";
import { Button } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const ImageWithRetake = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <img src={props.photo} style={{ borderRadius: "10px" }} alt="Taked one" />
      <Button
        color="primary"
        variant="contained"
        size="large"
        style={{
          borderRadius: "20px",
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
          bottom: "40px",
        }}
        onClick={props.handleRetakeClick}
      >
        {" "}
        <PhotoCameraIcon style={{ marginRight: "5px" }} /> Retake a Photo
      </Button>
    </div>
  );
};

export default ImageWithRetake;
