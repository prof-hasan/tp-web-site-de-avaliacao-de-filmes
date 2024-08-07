// src/pages/Home.js

import React from "react";
import { Container, TextField, Button, InputAdornment, Typography } from '@material-ui/core';
import Header from "../../components/header";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/core/styles";
import catalogoImg from '../../assets/catalogo.png';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
  },
  searchFieldBody: {
  },
  searchField: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius * 5,
    boxShadow: theme.shadows[2],
    border: 'none',
    backgroundColor: 'rgba(70, 0, 192, 0.3)',
    color: '#fff',
    transition: 'transform 0.2s ease-in-out',
    width: '100%',
    maxWidth: '100%',
    '& fieldset': {
      border: 'none',
    },
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  textField: {
    border: 'none',
    width: '100%',
    fontSize: '26px',
  },
  searchIcon: {
    color: 'white',
    opacity: 0.5,
  },
  input: {
    color: 'white',
  },
  boxBody: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(70, 0, 192, 0.3)',
    borderRadius: theme.shape.borderRadius * 5,
    boxShadow: theme.shadows[2],
    marginTop: theme.spacing(7),
    padding: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '450px',
    marginRight: theme.spacing(2),
  },
  boxTitle: {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
  boxText: {
    color: 'white',
    fontSize: '18px',
  },
  button: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    background: '#FCA600',
    border: '3px solid #FCA600',
    marginTop: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 5,
    textTransform: 'none',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      background: 'white',
      color: '#FCA600',
      transform: 'scale(1.10)',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <div className={classes.searchFieldBody}>
          <TextField
            className={classes.searchField}
            variant="outlined"
            placeholder="Buscar filme, diretor, gênero..."
            InputProps={{
              classes: {
                input: classes.input,
                root: classes.textField,
              },
              startAdornment: (
                <InputAdornment position="start" className={classes.searchIcon}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            autoFocus
          />
        </div>
        <div className={classes.boxBody}>
          <img src={catalogoImg} alt="Icon" className={classes.image} />
          <div className={classes.textDiv}>
            <Typography className={classes.boxTitle}> Explorar catálogo de filmes </Typography>
            <Typography className={classes.boxText}> Navegue por nosso vasto catálogo, onde cada filme é uma porta aberta para um novo mundo. Quer você seja um aficionado por dramas emocionantes, um entusiasta de comédias hilárias, um devoto de thrillers de tirar o fôlego, ou um explorador de documentários reveladores, temos algo especial para você.  </Typography>
            <Link to="/movielisting" className={classes.link}>
              <Button variant="contained" className={classes.button}> Catálogo de filmes </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
