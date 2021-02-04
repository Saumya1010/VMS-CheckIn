import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-component">
        <div className="exit-icon">
          <a
            href="/"
            style={{
              //   width: "50px",
              //   height: "50px",
              //   textAlign: "right",
              position: "absolute",
              left: "250px",
              color: "gray",
              display: "inline-flex",
              fontSize: "20px",
            }}
          >
            <ExitToAppIcon style={{ marginRight: "5px", top: "2px" }} />
            Exit
          </a>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5c/It_is_logo_of_LDRP.png"
            alt="LDRP"
            style={{
              width: "50px",
              height: "50px",
              //   textAlign: "right",
              position: "absolute",
              right: "250px",
              marginTop: "-10px",
              cursor: "pointer",
            }}
          ></img>
          <div className="ldrp-text">LDRP</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
