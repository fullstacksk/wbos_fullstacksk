import React, { useState } from "react";
import { Button, TextField, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const ResetPassword = ({ handleScreen }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!email.trim()) errors.email = "Must not be empty";
    else errors.email = "";
    setErrors(errors);
  };

  return (
    <Container>
      <div className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Forgot Password
        </Typography>

        <Typography variant="body2">
          Enter below the email that you used to login through to get a password
          reset code
        </Typography>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Get Code
          </Button>
          <div>
            <Typography component="div" variant="body2">
              Do not have an account?
              <Button color="primary" onClick={() => handleScreen("register")}>
                Register
              </Button>
            </Typography>
            <Typography component="div" variant="body2">
              Remember password?
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

export default ResetPassword;
