import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { createUser } from "../quries/quries";
import { useMutation } from "@apollo/client";
const Signup = ({ setOpenRegister, setOpenLogin }) => {
  const paperStyle = { padding: "30px 20px", width: 480, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const [gender, setGender] = useState("male");
  const usernameRef = React.useRef();
  const useremailRef = React.useRef();

  const userphoneRef = React.useRef();
  const userpasswordRef = React.useRef();
  const userconfirmPasswordRef = React.useRef();
  // snack bar
  const [open, setOpen] = React.useState(false);
  const [snackData, setSnackData] = React.useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <span className="text-red-300 font-extrabold text-xl">X</span>
        {/* <CloseIcon fontSize="small" /> */}
      </IconButton>
    </React.Fragment>
  );
  // end snack bar

  const [
    registerUser,
    { data: user, loading: userLoading, error: userSavingError },
  ] = useMutation(createUser);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      // name: usernameRef.current.value,
      email: useremailRef.current.value,
      // gender: gender,
      // phone: userphoneRef.current.value,
      password: userpasswordRef.current.value,
      // confirmPassword: userconfirmPasswordRef.current.value,
    };

    registerUser({ variables: data });
    if (userSavingError) {
      handleClick();
      setSnackData(userSavingError.message);
    }
    if (data) {
      handleClick();
      setSnackData("registered successfully");
      setOpenRegister(false);
      setTimeout(() => {
        setOpenLogin(true);
      }, 1000);
    }
  };

  // console.log({ user, userLoading, userSavingError });
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackData}
        action={action}
      />
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle} className="py-5 font-bold text-2xl">
              Sign Up
            </h2>
            <Typography
              className="text-blue-500"
              variant="caption"
              gutterBottom
            >
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              inputRef={usernameRef}
              fullWidth
              label="Name"
              placeholder="Enter your name"
            />
            <TextField
              inputRef={useremailRef}
              fullWidth
              label="Email"
              placeholder="Enter your email"
            />
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                value={gender}
                onChange={handleChange}
                aria-label="gender"
                name="gender"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="male"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              inputRef={userphoneRef}
            />
            <TextField
              fullWidth
              label="Password"
              inputRef={userpasswordRef}
              placeholder="Enter your password"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              inputRef={userconfirmPasswordRef}
              placeholder="Confirm your password"
            />
            <div className="py-2">
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
              />
              <Button type="submit" variant="contained" color="primary">
                Sign up
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
