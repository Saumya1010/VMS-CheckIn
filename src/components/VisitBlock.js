import React from "react";

const VisitBlock = (props) => {
  const blockClassName = "visit-block" + (props.active ? " active" : "");
  return (
    <div className={blockClassName} onClick={props.handleVisitClick}>
      <div className="business-visit-image">
        <>{props.icon}</>
      </div>
      <div className="business-visit-text">
        <h2 style={{ fontWeight: "600" }}>{props.title}</h2>
        <p style={{ fontSize: "18px" }}>{props.description}</p>
      </div>
    </div>
  );
};

export default VisitBlock;
