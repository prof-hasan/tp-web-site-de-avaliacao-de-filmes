// src/pages/Home.js

import React from "react";
import { Container, CssBaseline, TextField, IconButton, InputAdornment, Typography } from '@material-ui/core';
import Header from "../../components/header"; // Ajuste o caminho conforme necessário
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/core/styles";
import catalogoImg from '../../assets/catalogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
  },
  searchFieldBody: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
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
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    padding: theme.spacing(2),
  }

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
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
            autoFocus
          />
        </div>
        <div className={classes.boxBody}>
          <img src={catalogoImg} alt="Icon" className={classes.image} />
          <Typography className={classes.text}> teste </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Home;
