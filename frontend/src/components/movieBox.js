import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        height: '286px',
        width: '246px',
        margin: '0 10px',
    },
    listImage: {
        height: '246px',
        width: '246px',
        borderRadius: '10px',
        objectFit: 'cover',
    },
    subtitle: {
        marginTop: '10px',
        justifyContent: 'left',
    },
    listTitle: {
        fontSize: '22px',
        fontWeight: 'bold',
        fontFamily: 'urbanist',
    },
    info: {
        marginTop: '5px',
        fontSize: '14px',
        fontFamily: 'urbanist',
    }
}));

const MovieBox = ({ movieListImage, listTitle, author, moviesNumber }) => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div>
        <img src={movieListImage} className={classes.listImage} />
      </div>
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