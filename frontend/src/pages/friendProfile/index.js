import React from "react";
import { Container, Avatar, TextField, Button, InputAdornment, Typography } from '@material-ui/core';
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

const FriendProfile = () => {
  const classes = useStyles();
  const avatarImage = `../../public/usersAvatar/.jpg`;
//   const avatarImage = `../../public/usersAvatar/${friend.name.replace(/\s/g, '_')}.jpg`;

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
        <div className={classes.boxBody}>
          <Typography className={classes.playlistText}> Playlists: </Typography>
          <div className={classes.textDiv}>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FriendProfile;
