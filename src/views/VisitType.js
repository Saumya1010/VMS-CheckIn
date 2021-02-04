import React from "react";
import { Button } from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import PersonIcon from "@material-ui/icons/Person";

import VisitBlock from "../components/VisitBlock";

class VisitType extends React.Component {
  state = {
    visitType: "",
  };

  handleVisitClick(visitType) {
    console.log({ visitType });
    this.setState({ visitType });
  }

  render() {
    return (
      <div className="align-center">
        <div className="visit-type-text">
          <h1>What brings you here?</h1>
        </div>
        <div className="visit-wrapper">
          <VisitBlock
            icon={
              <BusinessIcon
                style={{ height: "100px", width: "100px", color: "#337cf6" }}
              />
            }
            title="Business Visit"
            description="Guest who come and visit office for business activities or job interviews."
            active={this.state.visitType === "business"}
            handleVisitClick={() => this.handleVisitClick("business")}
          />
          <VisitBlock
            icon={
              <PersonIcon
                style={{ height: "100px", width: "100px", color: "#337cf6" }}
              />
            }
            title="Personal Visit"
            description="Friends and family of employees who come and visit them in the office."
            active={this.state.visitType === "personal"}
            handleVisitClick={() => this.handleVisitClick("personal")}
          />
        </div>

        <div className="back-next-button">
          <Button
            className="next-button"
            color="primary"
            variant="contained"
            size="large"
            href="/welcome"
            style={{
              borderRadius: "20px",
            }}
            disabled={!this.state.visitType}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default VisitType;
