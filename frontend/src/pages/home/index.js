// src/pages/Home.js

import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
import Header from "../../components/header"; // Ajuste o caminho conforme necessário

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import logo from "../../assets/logo-lvm3.svg";
import { systemVersion } from "../../../package.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.container}>
          {/* Adicione aqui o conteúdo da página Home */}
          <Typography variant="h4">Bem-vindo ao MyApp</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Home;
