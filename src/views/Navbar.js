import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { clearVisitor } from "../actions/visitorAction";

const Navbar = (props) => {
  // const [doRedirect, setRedirect] = useState();

  // const handleExitClick = () => {
  //   props.clearVisitor();
  //   setRedirect("/");
  // };

  // if (doRedirect) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: doRedirect,
  //       }}
  //     />
  //   );
  // }

  console.log("props: ", props);

  return (
    <div className="navbar-component" style={{ display: "flex" }}>
      <div className="exit-icon">
        <a
          href="/"
          // onClick={handleExitClick}
          style={{
            color: "gray",
            display: "inline-flex",
            fontSize: "20px",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          <ExitToAppIcon style={{ marginRight: "5px", top: "2px" }} />
          Exit
        </a>
      </div>
      <div
        className="ldrp-logo"
        style={{ cursor: "pointer", marginLeft: "auto", marginTop: "-10px" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/5/5c/It_is_logo_of_LDRP.png"
          alt="LDRP"
          style={{
            width: "50px",
            height: "50px",
            marginTop: "-5px",
            cursor: "pointer",
          }}
        ></img>
        <div
          className="ldrp-text"
          style={{
            fontSize: "16px",
            letterSpacing: "4px",
            fontWeight: "500",
            color: "darkorange",
            marginTop: "-6px",
          }}
        >
          LDRP
        </div>
      </div>
    </div>
  );
};

export default connect(null, { clearVisitor })(Navbar);
