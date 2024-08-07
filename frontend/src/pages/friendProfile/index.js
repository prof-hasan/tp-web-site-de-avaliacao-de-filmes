import React, { useState } from 'react';
import { Container, Avatar, TextField, Button, InputAdornment, Typography } from '@material-ui/core';
import Header from "../../components/header";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/core/styles";
import catalogoImg from '../../assets/catalogo.png';
import { Link } from "react-router-dom";
import MovieBox from "../../components/movieBox";

import image1 from "../../assets/capasDosFilmes/heroes.jpg";
import image2 from "../../assets/capasDosFilmes/stepmom.jpg";
import image3 from "../../assets/capasDosFilmes/classicos.jpg";
import image4 from "../../assets/capasDosFilmes/robertDowneyJr.jpg";
import image5 from "../../assets/capasDosFilmes/police.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
    color: 'white',
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
    // backgroundColor: 'rgba(70, 0, 192, 0.3)',
    borderRadius: theme.shape.borderRadius * 5,
    boxShadow: theme.shadows[2],
    marginTop: theme.spacing(7),
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
  },
  friendName: {
    color: 'white',
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
  friendText: {
    color: 'white',
    fontSize: '20px',
    marginBottom: theme.spacing(1),
  },
  playlistText: {
    color: 'white',
    fontSize: '24px',
    marginBottom: theme.spacing(3),
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowButton: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#fff',
  },
  sectionTitle: {
    marginTop: '70px',
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
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

const list = [
    { image: image1, name: 'Heróis', author: '@Santos', moviesNumber: 38 },
    { image: image2, name: 'Para chorar', author: '@MahR5', moviesNumber: 12 },
    { image: image3, name: 'Clássicos', author: '@MahR5', moviesNumber: 24 },
    { image: image4, name: 'Com Robert Downey Jr', author: '@Santos', moviesNumber: 28 },
    { image: image5, name: 'Policiais', author: '@Vini', moviesNumber: 31 },
  ];

const FriendProfile = () => {
  const classes = useStyles();
  const avatarImage = `../../public/usersAvatar/.jpg`;
//   const avatarImage = `../../public/usersAvatar/${friend.name.replace(/\s/g, '_')}.jpg`;

  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);

  const handlePreviousList = () => {
    setCurrentListIndex((prev) => (prev + 4) % list.length);
  };

  const handleNextList = () => {
    setCurrentListIndex((prev) => (prev - 4 + list.length) % list.length);
  };

  const handlePreviousGenre = () => {
    setCurrentGenreIndex((prev) => (prev + 4) % list.length);
  };

  const handleNextGenre = () => {
    setCurrentGenreIndex((prev) => (prev - 4 + list.length) % list.length);
  };

  const renderItems = (items, startIndex) => {
    const endIndex = (startIndex + 4) % items.length;
    if (startIndex < endIndex) {
      return items.slice(startIndex, endIndex);
    } else {
      return [...items.slice(startIndex), ...items.slice(0, endIndex)];
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <div className={classes.boxBody}>
          <Avatar className={classes.avatar} src={avatarImage} />
          <div className={classes.textDiv}>
            <Typography className={classes.friendName}> Amigo #1 </Typography>
            <Typography className={classes.friendText}> Data de entrada: 20 de março de 2024 </Typography>
            <Typography className={classes.friendText}> 38 filmes avaliados </Typography>
            <Typography className={classes.friendText}> Gênero favorito: Comédia, Suspense </Typography>
            <Typography className={classes.friendText}> Filme favorito: O Poderoso Chefão </Typography>
          </div>
        </div>
        <div className={classes.sectionTitle}>Listas</div>
          <div className={classes.listContainer}>
            <button className={classes.arrowButton} onClick={handlePreviousList}>{"<"}</button>
                {renderItems(list, currentListIndex).map((item, index) => (
                <MovieBox
                key={index}
                movieListImage={item.image}
                listTitle={item.name}
                author={item.author}
                moviesNumber={item.moviesNumber}
                />
            ))}
            <button className={classes.arrowButton} onClick={handleNextList}>{">"}</button>
          </div>
      </Container>
    </div>
  );
};

export default FriendProfile;
