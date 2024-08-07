import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
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
}));

const friends = [
    {
        name: "Lucas Santos",
        favMovie: "Durmo contigo e serei mãe",
        favGenre: "Suspense"
    },
    {
        name: "Vinícius Pinheiro",
        favMovie: "Dorme comigo e você será mãe",
        favGenre: "Comédia"
    },
    {
        name: "Marcela Caram",
        favMovie: "A tesourada mortal",
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

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.container}>
          {friends.map((friend) => (
            <FriendCard key={friend.title} friend={friend} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Friends;
