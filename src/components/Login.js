import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Button,
  Typography,
  Link,
  Checkbox,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { loginUserQuery } from "../quries/quries";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const useremailRef = React.useRef();
  const userpasswordRef = React.useRef();
  const [getToken, { loading, data: token }] = useLazyQuery(loginUserQuery);
  // const {
  //   loading,
  //   error,
  //   data: token,
  // } = useQuery(loginUserQuery, {
  //   variables: data,
  // });
  if (token.login.token) {
    localStorage.setItem("token", JSON.stringify(token.login.token));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: useremailRef.current.value,
      password: userpasswordRef.current.value,
    };
    getToken({ variables: data });

    // registerUser({ variables: data });
    // if (userSavingError) {
    //   handleClick();
    //   setSnackData(userSavingError.message);
    // }
    // if (data) {
    //   handleClick();
    //   setSnackData("registered successfully");
    //   setTimeout(() => {
    //     setOpenRegister(false);
    //   }, "2000");
    // }
  };
  return (
    <Grid className="w-full">
      <Paper className="shadow-none" style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2 className="py-5 font-bold text-2xl">Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            inputRef={useremailRef}
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            className="pb-5"
          />
          <TextField
            inputRef={userpasswordRef}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>

        <div className="absolute bottom-20 right-20 text-right">
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Sign Up</Link>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
