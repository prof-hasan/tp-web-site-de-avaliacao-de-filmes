import React, { useState, useContext } from "react";
import { Link as RouterLink, useNavigate, redirect } from "react-router-dom";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    Container,
    InputAdornment,
    IconButton,
    Link,
    Divider
} from '@material-ui/core';

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";


import logo from "../../assets/logo-lvm3.svg";
import { systemVersion } from "../../../package.json";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(2),
    height: '50vh',
    width: '60vh',
    borderRadius: theme.spacing(2),
    //border: `1px solid ${theme.palette.borderPrimary}`,
    // backgroundColor: `rgba(${theme.palette.background.paper})`,
    //backgroundColor: theme.palette.textPrimary,
    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.5)",
    backgroundColor: `rgba(${parseInt(theme.palette.textPrimary.slice(1, 3), 16)}, ${parseInt(theme.palette.textPrimary.slice(3, 5), 16)}, ${parseInt(theme.palette.textPrimary.slice(5, 7), 16)},0.7)`,
    //boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.16)",

  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
  },
  whatsapp: {
    backgroundColor: '#32d951'
  },
  form: {
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    //marginTop: theme.spacing(5),
    margin: theme.spacing(3, 0, 2),
  },
  containerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(4),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '150vh',
  },
  mobileContainer: {
    flex: 1,
    display: 'flex', 
    maxWidth:'100vw',
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh'
  },
  hideOnMobile: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

}));

const Login = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigation= useNavigate();

  const handleChangeInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    //e.preventDefault();
    //getLogin();
    //redirectHome();
  };

  const getLogin = async () => {
  };

  const redirectHome = () => {
    //navigation("/Home")
  }
  

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.containerWrapper}>
          <Container component="div" maxWidth="xs" className={classes.mobileContainer}>
            <div className={classes.paper}>
            <div style={{ width:'50%', height:'50%'}}>
            <img src={logo} style={{width:'80%'}} />
            </div>
               <Divider />
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
              
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  value={user.username}
                  onChange={handleChangeInput}
                  autoComplete="username"
                  autoFocus
                  color="primary"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="senha"
                  id="password"
                  value={user.password}
                  onChange={handleChangeInput}
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((e) => !e)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color= "primary"
                  classaNme={classes.submit}
                >
                  Entrar
                </Button>
              </form>
            </div>
          </Container>       
        </div>
      </Container>
    </div>
  ); 
};

export default Login; 