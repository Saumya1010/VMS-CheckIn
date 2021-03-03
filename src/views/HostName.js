import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function HostName(props) {
  return (
    <Autocomplete
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "400px",
        marginTop: "60px",
        marginBottom: "60px",
      }}
      options={hostData}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Host name" variant="outlined" required />
      )}
      onChange={props.onChange}
    ></Autocomplete>
  );
}

const hostData = [
  { name: "Mr. Mehul Barot", email: "vigour009@gmail.com" },
  { name: "Mr. Sandip Modha", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Hitesh Patel", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Manoj Sahu", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Ashish Patel", email: "saumyapatel101@gmail.com" },
  { name: "Mrs. Shivangi Surti", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Hitesh Barot", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Vishal Barot", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Vishal Nayak", email: "saumyapatel101@gmail.com" },
  { name: "Mrs. Vaishali Patel", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Sanjay Patel", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Ochchhav Patel", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Janak Tank", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Dhruv Dave", email: "saumyapatel101@gmail.com" },
  { name: "Mrs. Vaidehi Patel", email: "saumyapatel101@gmail.com" },
  { name: "Mrs. Riya Gohil", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Pratik Modi", email: "saumyapatel101@gmail.com" },
  { name: "Mrs. Jayana Kaneriya", email: "saumyapatel101@gmail.com" },
  { name: "Mrs. Rashmika Patel", email: "saumyapatel101@gmail.com" },
  { name: "Mr. Dharmesh Tank", email: "saumyapatel101@gmail.com" },
];
