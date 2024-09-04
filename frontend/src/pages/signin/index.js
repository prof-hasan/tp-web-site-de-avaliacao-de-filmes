import React, { useState, useContext } from "react";
import { Link as RouterLink, useNavigate, redirect } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Link,
  Divider,
  Snackbar
} from '@material-ui/core';
import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import logo from "../../assets/logo-lvm3.svg";
import useSignIn from "../../hooks/useSignIn";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(2),
    height: 'auto', // Altere aqui
    width: '50%',
    borderRadius: theme.spacing(2),
    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.5)",
    backgroundColor: `rgba(${parseInt(theme.palette.textPrimary.slice(1, 3), 16)}, ${parseInt(theme.palette.textPrimary.slice(3, 5), 16)}, ${parseInt(theme.palette.textPrimary.slice(5, 7), 16)},0.7)`,
  },
  avatar: {
    margin: theme.spacing(1),
  },
  whatsapp: {
    backgroundColor: '#32d951'
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

const Signin = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ name: "", username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useSignIn();
  const navigation = useNavigate();

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create();
  };

  const create = async () => {
    try {
      const newUser = {
        ...user,
        favoriteGenre: "",
        favoriteMovie: "",
        evaluatedFilms: 0
      };
  
      const data = await createUser(newUser);
      if(data){
        alert("Usuário criado com sucesso!");
        redirectLogin();
      }
    }catch(err){
        console.error(err)
    }
  };

  const redirectLogin = () => {
    navigation("/login")
  }
  
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.containerWrapper}>
          <Container component="div" maxWidth="xs" className={classes.mobileContainer}>
            <div className={classes.paper}>
              <div style={{ width: '50%', height: '40%' }}>
                <Link to="/">
                    <img src={logo} style={{ width: '80%' }} />
                </Link>
              </div>
              <Divider />
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Crie seu cadastro
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Insira seu nome"
                    name="name"
                    value={user.name}
                    onChange={handleChangeInput}
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Insira seu username"
                    name="username"
                    value={user.username}
                    onChange={handleChangeInput}
                    autoComplete="username"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Insira sua senha"
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirme sua senha"
                    id="confirmPassword"
                    value={user.confirmPassword}
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
                    Criar conta
                </Button>
                </form>
            </div>
          </Container>       
        </div>
      </Container>
    </div>
  ); 
};

export default Signin; 
