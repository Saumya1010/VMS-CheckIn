import React from "react";
import { Button } from "@material-ui/core";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Webcam from "react-webcam";

class Photo extends React.Component {
  render() {
    return (
      <div className="align-center">
        <div>
          <h1>Let's snap a photo!</h1>
        </div>
        <div className="camera-screen">
          <Webcam audio={false} style={{ borderRadius: "10px" }} />
        </div>
        <div className="photo" style={{ marginTop: "5px" }}>
          <Button
            id="take-a-photo"
            color="primary"
            variant="contained"
            size="large"
            href=""
            style={{ borderRadius: "20px" }}
          >
            {" "}
            <PhotoCameraIcon style={{ marginRight: "5px" }} /> Take a Photo
          </Button>
        </div>
        {/* <div className="">
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="top"
                control={<Checkbox color="primary" />}
                label="Acknowledge and agree to the Terms and Conditions."
                labelPlacement="right"
              />
            </FormGroup>
          </FormControl>
        </div> */}
        <div className="back-next-button">
          <form>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              href="/info"
              style={{ borderRadius: "20px" }}
            >
              Back
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="large"
              href="/selectHost"
              style={{ borderRadius: "20px" }}
            >
              Next
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Photo;

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: "user",
// };

// const WebcamCapture = () => {
//   const webcamRef = React.useRef(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//   }, [webcamRef]);

//   return (
//     <>
//       <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//       />
//       <button onClick={capture}>Capture photo</button>
//     </>
//   );
// };

// export default WebcamCapture;
