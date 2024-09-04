import React, { useState, useEffect } from 'react';
import { Container, Avatar, TextField, Button, Typography } from '@material-ui/core';
import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../../assets/capasDosFilmes/heroes.jpg";
import useAuth from '../../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
    color: 'white',
  },
  boxBody: {
    display: 'flex',
    alignItems: 'center',
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
    marginTop: theme.spacing(3),
    color: 'white',
    fontSize: '20px',
    marginBottom: theme.spacing(1),
  },
  textField: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(3),
    width: '200px',
    '&:hover': {
      border: '1px solid white',
      borderRadius: theme.shape.borderRadius * 2,
    },
    '& fieldset': {
      border: '1px solid white',
      borderRadius: theme.shape.borderRadius * 2,
      opacity: 0.5,
    },
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
      marginTop: theme.spacing(-1),
    },
  },
  input: {
    color: 'white',
  },
  button2: {
    color: 'white',
    fontSize: '14px',
    borderRadius: theme.shape.borderRadius * 5,
    textTransform: 'none',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      background: '#FCA600',
      color: 'white',
      transform: 'scale(1.10)',
    },
    marginLeft: theme.spacing(1),
  },
  button3: {
    marginTop: theme.spacing(4),
    color: 'white',
    fontSize: '14px',
    borderRadius: theme.shape.borderRadius * 5,
    textTransform: 'none',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      background: '#FCA600',
      color: 'white',
      transform: 'scale(1.10)',
    },
    marginLeft: theme.spacing(1),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isEditingGenre, setIsEditingGenre] = useState(false);
  const [isEditingMovie, setIsEditingMovie] = useState(false);
  const [newFavoriteGenre, setNewFavoriteGenre] = useState("");
  const [newFavoriteMovie, setNewFavoriteMovie] = useState("");
  const { editUsers } = useAuth();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
      setNewFavoriteGenre(user.favoriteGenre || "");
      setNewFavoriteMovie(user.favoriteMovie || "");
    }
    
  }, []);

  const handleSaveChanges = async () => {
    if (loggedInUser) {
      console.log(loggedInUser);
      const updatedUser = {
        ...loggedInUser,
        favoriteGenre: newFavoriteGenre,
        favoriteMovie: newFavoriteMovie,
      };
      
      const data = await editUsers(updatedUser);
      localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
      setLoggedInUser(updatedUser);
    }
    setIsEditingGenre(false);
    setIsEditingMovie(false);
  };

  const handleCancelEdit = () => {
    setIsEditingGenre(false);
    setIsEditingMovie(false);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <div className={classes.boxBody}>
          <Avatar className={classes.avatar} />
          <div>
            <Typography className={classes.friendName}>
              {loggedInUser ? loggedInUser.name : "Usuário Desconhecido"}
            </Typography>
            {isEditingGenre ? (
              <>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  label="Gênero Favorito"
                  value={newFavoriteGenre}
                  onChange={(e) => setNewFavoriteGenre(e.target.value)}
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                />
                <Button className={classes.button3} onClick={handleSaveChanges}>
                  Salvar
                </Button>
                <Button className={classes.button3} onClick={handleCancelEdit}>
                  Cancelar
                </Button>
              </>
            ) : (
              <Typography className={classes.friendText}>
                Gênero favorito: {loggedInUser ? loggedInUser.favoriteGenre : "Não definido"}
                <Button className={classes.button2} onClick={() => setIsEditingGenre(true)}>
                  {loggedInUser?.favoriteGenre ? "Editar" : "Adicionar"}
                </Button>
              </Typography>
            )}
            {isEditingMovie ? (
              <>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  label="Filme Favorito"
                  value={newFavoriteMovie}
                  onChange={(e) => setNewFavoriteMovie(e.target.value)}
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                />
                <Button className={classes.button3} onClick={handleSaveChanges}>
                  Salvar
                </Button>
                <Button className={classes.button3} onClick={handleCancelEdit}>
                  Cancelar
                </Button>
              </>
            ) : (
              <Typography className={classes.friendText}>
                Filme favorito: {loggedInUser ? loggedInUser.favoriteMovie : "Não definido"}
                <Button className={classes.button2} onClick={() => setIsEditingMovie(true)}>
                  {loggedInUser?.favoriteMovie ? "Editar" : "Adicionar"}
                </Button>
              </Typography>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
