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

const Register = ({ handleScreen }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!email.trim()) errors.email = "Must not be empty";
    else errors.email = "";
    if (!password) errors.password = "Must not be empty";
    else errors.password = "";
    if (!name) errors.name = "Must not be empty";
    else errors.name = "";

    setErrors(errors);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h5">Register</Typography>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="name"
            helperText={errors.name}
            error={errors.name ? true : false}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
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
            Register
          </Button>
          <div>
            <Typography component="div" variant="body2">
              Have an account?
              <Button color="primary" onClick={() => handleScreen("login")}>
                Login
              </Button>
            </Typography>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
