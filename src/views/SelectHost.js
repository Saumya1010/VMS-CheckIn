import React from "react";
import { Button } from "@material-ui/core";
import HostName from "./HostName";

class SelectHost extends React.Component {
  render() {
    return (
      <div className="align-center">
        <div style={{}}>
          <h1>
            Who are you visiting? <br /> We'll help you to notify your host.
          </h1>
        </div>
        <div className="host-name">
          <HostName />
        </div>
        <div className="back-next-button">
          <form>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              href="/photo"
              style={{ borderRadius: "20px" }}
            >
              Back
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="large"
              href="/thankYou"
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

export default SelectHost;
