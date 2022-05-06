import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState("");

  const { name, email, contact, address } = state;

  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all input Field");
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Contact Form</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "50px",
          marginBottom: "20px",
          marginLeft: "10px",
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          color="success"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name"
              label="Name"
              value={name}
              type="text"
              onChange={handleChange}
            />
            <TextField
              id="outlined-name"
              label="Email"
              value={email}
              type="email"
              onChange={handleChange}
            />
            <TextField
              id="outlined-name"
              label="Contact"
              value={contact}
              type="number"
              onChange={handleChange}
            />
            <TextField
              id="outlined-name"
              label="Address"
              value={address}
              type="text"
              onChange={handleChange}
            />
          </Box>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="success"
            style={{ width: "100px" }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddUserForm;
