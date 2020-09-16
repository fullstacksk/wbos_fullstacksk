import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  }
}));

const Signup = ({ handleScreen }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!password) errors.password = "Must not be empty";
    else errors.password = "";
    if (!email.trim()) errors.email = "Must not be empty";
    else errors.email = "";

    setErrors(errors);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h5">Welcome Back</Typography>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            helperText={errors.email}
            error={errors.email ? true : false}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={errors.password}
            error={errors.password ? true : false}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <div>
            <Typography component="div" variant="body2">
              Do not have an account?
              <Button color="primary" onClick={() => handleScreen("register")}>
                Register
              </Button>
            </Typography>
            <Typography component="div" variant="body2">
              Forgot password?
              <Button
                color="primary"
                onClick={() => handleScreen("resetPassword")}
              >
                Reset Password
              </Button>
            </Typography>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
