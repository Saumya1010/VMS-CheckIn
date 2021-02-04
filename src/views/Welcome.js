import React from "react";
import { Button } from "@material-ui/core";

class Welcome extends React.Component {
  render() {
    return (
      <div className="align-center">
        <h1 style={{}}>Welcome to LDRP!</h1>
        <Button
          style={{ borderRadius: "20px", marginTop: "100px" }}
          color="primary"
          variant="contained"
          size="large"
          href="/info"
        >
          Check in
        </Button>
      </div>
    );
  }
}

export default Welcome;
