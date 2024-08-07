import React, { useState } from 'react';
import { CssBaseline, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../../components/header";
import FriendCard from '../../components/friendCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 5,
    textTransform: 'none',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.10)',
    },
  },
  buttonShowMore: {
    background: '#FCA600',
    color: 'white',
    border: '3px solid #FCA600',
    '&:hover': {
      background: 'white',
      color: '#FCA600',
    },
  },
  buttonShowLess: {
    background: 'white',
    color: '#FCA600',
    border: '3px solid #FCA600',
    '&:hover': {
      background: '#FCA600',
      color: 'white',
    },
  },
}));

const friends = [
  {
      name: "Lucas Santos",
      favMovie: "Deadpool & Wolverine",
      favGenre: "Suspense"
  },
  {
      name: "Vinícius Pinheiro",
      favMovie: "Dorme comigo e você será mãe",
      favGenre: "Comédia"
  },
  {
      name: "Marcela Caram",
      favMovie: "A tesoura mortal",
      favGenre: "Policial"
  },
  {
      name: "Terry Crews",
      favMovie: "As Branquelas",
      favGenre: "Comédia"
  },
  {
      name: "João Pereira",
      favMovie: "The Godfather",
      favGenre: "Crime"
  },
];

const Friends = () => {
  const classes = useStyles();
  const [showAll, setShowAll] = useState(false);

  const displayedFriends = showAll ? friends : friends.slice(0, 4);

  const handleToggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.container}>
          {displayedFriends.map((friend) => (
            <FriendCard key={friend.name} friend={friend} component={Link} to="../friendProfile" />
          ))}
          <Button 
            variant="contained" 
            className={`${classes.button} ${showAll ? classes.buttonShowLess : classes.buttonShowMore}`}
            onClick={handleToggleShowAll}
          >
            {showAll ? 'Mostrar menos' : 'Mostrar mais'}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Friends;
