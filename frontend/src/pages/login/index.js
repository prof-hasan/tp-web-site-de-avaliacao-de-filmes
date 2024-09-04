import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
    Button,
    CssBaseline,
    TextField,
    Typography,
    Container,
    InputAdornment,
    IconButton,
    Divider,
    Link
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import logo from "../../assets/logo-lvm3.svg";
import useAuth from "../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(2),
    height: 'auto',
    width: '80%',
    borderRadius: theme.spacing(2),
    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.5)",
    backgroundColor: `rgba(${parseInt(theme.palette.textPrimary.slice(1, 3), 16)}, ${parseInt(theme.palette.textPrimary.slice(3, 5), 16)}, ${parseInt(theme.palette.textPrimary.slice(5, 7), 16)},0.7)`,
  },
  form: {
    width: "75%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  containerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(4),
  },
  mobileContainer: {
    flex: 1,
    display: 'flex', 
    maxWidth:'100vw',
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh'
  },
}));

const Login = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();
  const navigation = useNavigate();

  const handleChangeInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    getLogin();
  };

  const getLogin = async () => {
    const data = await handleLogin(user);
    if (data && data.loggedUser) {
      // Supondo que data.loggedUser é um objeto com todos os dados do usuário
      localStorage.setItem('loggedInUser', JSON.stringify(data.loggedUser));
      redirectHome();
    } else {
      console.log('Erro ao logar');
    }
  };

  const redirectHome = () => {
    navigation("/");
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.containerWrapper}>
          <Container component="div" maxWidth="xs" className={classes.mobileContainer}>
            <div className={classes.paper}>
              <div style={{ width: '50%', height: '40%' }}>
                <img src={logo} style={{ width: '80%' }} alt="logo" />
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
                  color="primary"
                  className={classes.submit}
                >
                  Entrar
                </Button>
                <Typography variant="body2">
                  Ainda não tem uma conta?{" "}
                  <Link component={RouterLink} to="/signin">
                    Clique aqui!
                  </Link>
                </Typography>
              </form>
            </div>
          </Container>       
        </div>
      </Container>
    </div>
  ); 
};

export default Login;
