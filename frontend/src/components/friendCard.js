import React from 'react';
import { Avatar, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    backgroundColor: '#2a2a72',
    color: '#fff',
    transition: 'transform 0.2s ease-in-out',
    width: '100%',
    maxWidth: '100%',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    borderRadius: '40px',
    marginRight: theme.spacing(2),
  },
  details: {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    gap: theme.spacing(1),
    alignItems: 'center',
    width: '100%',
  },
  nameCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
  },
  nameText: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  fav: {

  },
  favMovie:{

  },
  favGenre: {
    marginTop: theme.spacing(2),
  },
}));

const FriendCard = ({ friend }) => {
  const classes = useStyles();
  const avatarImage = `../../public/usersAvatar/${friend.name.replace(/\s/g, '_')}.jpg`;

  return (
    <Box className={classes.card}>
      <Avatar className={classes.avatar} src={avatarImage} />
      <Box className={classes.details}>
        <Box className={classes.nameCard}>
          <Box className={classes.name}>
            <Typography variant="body1" className={classes.nameText}>{friend.name}</Typography>
          </Box>
        </Box>
        <Box className={classes.fav}>
          <Box className={classes.favMovie}>
            <Typography variant="body1">Filme favorito: {friend.favMovie}</Typography>
          </Box>
          <Box className={classes.favGenre}>
            <Typography variant="body1">Gênero favorito: {friend.favGenre}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FriendCard;
