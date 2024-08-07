import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    height: '286px',
    width: '246px',
    margin: '0 10px', // Adicionando margem para espaçamento
    textAlign: 'center', // Centralizando o texto
  },
  listImage: {
    height: '246px',
    width: '246px',
    borderRadius: '10px', // Adicionando bordas arredondadas
    objectFit: 'cover', // Garantindo que a imagem cubra toda a área
  },
  subtitle: {
    marginTop: '10px', // Adicionando margem superior
  },
  listTitle: {
    fontSize: '18px',
    fontWeight: 'bold', // Adicionando negrito ao título
  },
  info: {
    fontSize: '14px',
    color: '#ccc', // Adicionando cor mais clara para o texto informativo
  }
}));

const MovieBox = ({ movieListImage, listTitle, author, moviesNumber }) => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <img src={movieListImage} className={classes.listImage} alt={`${listTitle} cover`} />
      <div className={classes.subtitle}>
        <div className={classes.listTitle}>{listTitle}</div>
        <div className={classes.info}>{author} - {moviesNumber} filmes</div>
      </div>
    </div>
  );
};

MovieBox.propTypes = {
  movieListImage: PropTypes.string.isRequired,
  listTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  moviesNumber: PropTypes.number.isRequired,
};

export default MovieBox;
