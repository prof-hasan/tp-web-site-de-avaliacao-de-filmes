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
    textDecoration: 'none',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    cursor: 'pointer', 
  },
  poster: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    borderRadius: '4px',
    marginRight: theme.spacing(2),
  },
  details: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
    gap: theme.spacing(1),
    alignItems: 'center',
    width: '100%',
  },
  titleGenre: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  platformIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  checkIcon: {
    marginLeft: theme.spacing(1),
    color: '#00e676', // Cor verde para o ícone de verificação
  },
}));

const MovieCard = ({ movie, onClick, component: Component = 'div', ...props }) => {
  const classes = useStyles();

  const handleCardClick = () => {
    if (onClick) {
      onClick(movie);  // Chame a função onClick passando o filme
    }
  };

  const [month, day, year] = movie.releaseDate.split('/').map(Number);
  const title = movie.title[0];
  let icon;

  if (title < 'H') {
    icon = require('../assets/icons8-netflix-50.png')
  } else if (title < 'O') {
    icon = require('../assets/icons8-hbo-64.png')
  } else {
    icon = require('../assets/icons8-disney-50.png')
  }
  
  return (
    <Box className={classes.card} component={Component} {...props} onClick={handleCardClick}>
      <Avatar className={classes.poster} src={require(`../assets/capasDosFilmes/${movie.image}`)} />
      <Box className={classes.details}>
        <Box className={classes.titleGenre}>
          <Box className={classes.title}>
            <Typography variant="body1">{movie.title}</Typography>
            {movie.seen && <CheckCircleIcon className={classes.checkIcon} />}
          </Box>
          <Typography variant="body2">{movie.genre}</Typography>
        </Box>
        <Typography variant="body2">{movie.duration}</Typography>
        <Typography variant="body2">{year}</Typography>
        <Avatar
          src={icon}
          className={classes.platformIcon}
          alt={movie.platform}
        />
        {movie.rating ? (
          <Box className={classes.rating}>
            {Array.from({ length: 5 }).map((_, index) =>
              index < movie.rating ? (
                <StarIcon key={index} style={{ color: '#ffc107' }} />
              ) : (
                <StarBorderIcon key={index} style={{ color: '#ffc107' }} />
              )
            )}
          </Box>
        ) : (
          <Button variant="contained" color="primary" size="small">Avaliar</Button>
        )}
      </Box>
    </Box>
  );
};

export default MovieCard;