import React from "react";
import Webcam from "react-webcam";
import { Button } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.handlePhotoClick(imageSrc);
  }, [webcamRef]);

  return (
    <div style={{ position: "relative" }}>
      <Webcam
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={600}
        videoConstraints={videoConstraints}
        style={{
          borderRadius: "10px",
        }}
      />
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
        onClick={capture}
      >
        {" "}
        <PhotoCameraIcon style={{ marginRight: "5px" }} /> Take a Photo
      </Button>
    </div>
  );
};

export default WebcamCapture;
