import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { connect } from "react-redux";
import moment from "moment";
import { getVisit } from "../actions/visitorAction";

const VisitDetail = (props) => {
  const { visit } = props;

  const [doRedirect, setRedirect] = useState();

  const [hostReply, setHostReply] = useState("");

  const handleHostReply = (hostReply) => {
    setHostReply(hostReply);
  };

  console.log("host reply:", hostReply);

  useEffect(() => {
    console.log("mounted");
    props.getVisit(props.match.params.id);
  }, []);

  useEffect(() => {
    console.log("visit changed -------", props.visit);
  }, [visit]);

  console.log("props ---->>>>>", props);

  if (doRedirect) {
    return (
      <Redirect
        to={{
          pathname: doRedirect,
        }}
      />
    );
  }
  const renderVisitData = () => {
    return (
      <div className="align-center">
        <div
          className="visit-information"
          style={{ backgroundColor: "#eee", padding: "10px 0 20px" }}
        >
          <div
            className="visit-notification"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NotificationsActiveIcon
              style={{
                height: "30px",
                width: "30px",
                color: "#2d71c7",
                marginRight: "20px",
              }}
            />
            <h3 style={{ fontSize: "24px", color: "#2d71c7", margin: "3px" }}>
              Visitor Notification
            </h3>
          </div>
          <div
            className="visit-notification-wrapper"
            style={{
              backgroundColor: "#fff",
              padding: "20px 0",
              maxWidth: "500px",
              margin: "0 auto",
              border: "1px solid #eee",
              borderRadius: "10px",
            }}
          >
            <div className="visitor-photo-detail">
              <img
                src={visit.photo}
                alt="visitor"
                style={{ height: "180px", width: "180px", borderRadius: "50%" }}
              />
            </div>
            <div className="visitor-name-time">
              <p>
                <strong>
                  {visit.firstName} {visit.lastName}
                </strong>{" "}
                is here to see you!
              </p>
              <p>
                They checked in to <strong>LDRP campus, Gandhinagar</strong> on
                <strong>
                  {moment(visit.createdAt).format("MMMM Do YYYY")}
                </strong>
                at <strong>{moment(visit.createdAt).format("h:mm a")}</strong>.
              </p>
            </div>
            <div className="accept-button" style={{ marginBottom: "10px" }}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                style={{ borderRadius: "20px", textTransform: "none" }}
                onClick={() => handleHostReply("accepted")}
              >
                I'm on my way!
              </Button>
            </div>
            <div className="deny-button">
              <Button
                color="primary"
                type="submit"
                size="large"
                style={{ borderRadius: "20px", textTransform: "none" }}
                onClick={() => handleHostReply("denied")}
              >
                I'm not expecting them.
              </Button>
            </div>
          </div>
          <div
            className="visit-information-title"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0",
            }}
          >
            <PersonIcon
              style={{
                height: "24px",
                width: "24px",
                color: "#2d71c7",
                marginRight: "20px",
              }}
            />
            <h3 style={{ fontSize: "20px", color: "#2d71c7", margin: "1px" }}>
              Visitor Information
            </h3>
          </div>
          <div
            className="visitor-detail-wrapper"
            style={{
              backgroundColor: "#fff",
              padding: "10px 0",
              maxWidth: "500px",
              margin: "0 auto",
              border: "1px solid #eee",
              borderRadius: "10px",
            }}
          >
            <div className="visitor-detail">
              <div
                className="visitor-first-name"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 80px",
                }}
              >
                <p>First-Name</p> <p>{visit.firstName}</p>
              </div>
              <div
                className="visitor-last-name"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 80px",
                }}
              >
                <p>Last-Name</p> <p>{visit.lastName}</p>
              </div>
              <div
                className="visitor-email"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 80px",
                }}
              >
                <p>Email</p> <p>{visit.email}</p>
              </div>
              <div
                className="visitor-phone"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 80px",
                }}
              >
                <p>Phone</p> <p>{visit.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (visit && Object.keys(visit).length > 0) {
    return renderVisitData();
  } else {
    return <h1>Loading...</h1>;
  }
};

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    visit: state.visit,
  };
};

export default connect(mapStateToProps, { getVisit })(VisitDetail);

// host: { name: 'Mr. Mehul Barot', email: 'vigour009@gmail.com' },
//   createdAt: 2021-03-01T12:24:05.711Z,
//   updatedAt: 2021-03-01T12:24:05.711Z,
//   __v: 0
// }
// visitor :  {
//   _id: 603cdce5c3124a1cacff5d70,  response.data.visit._id
//   visitType: 'business',  response.data.visit.visitType
//   email: 'saumyapatel101@gmail.com',  response.data.visit.email
//   phone: '07359287878',  response.data.visit.phone
//   firstName: 'Saumya',  response.data.visit.firstName
//   lastName: 'Patel',  response.data.visit.lastName
//   photo:  response.data.visit.photo

// visit.createdAt(moment().format("h:mm a"))
// {moment(visit.createdAt).format("h:mm a")}
