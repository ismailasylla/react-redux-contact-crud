import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserByid, updateUser } from "../state/action-creator/actions";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState("");

  const { name, email, contact, address } = state;

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserByid(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Input fields should not be blanck");
      console.log(error);
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <>
      <span style={{ textAlign: "center" }}>
        <h1>Edit User</h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </span>

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
              value={name || ""}
              type="text"
              name="name"
              onChange={handleChange}
            />
            <TextField
              id="outlined-name"
              label="Email"
              value={email || ""}
              type="email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="outlined-name"
              label="Contact"
              value={contact || ""}
              type="number"
              name="contact"
              onChange={handleChange}
            />
            <TextField
              id="outlined-name"
              label="Address"
              value={address || ""}
              type="text"
              name="address"
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
            Update
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditUser;
