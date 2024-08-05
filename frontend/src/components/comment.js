import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
  movieCard: {
    display: 'flex',
    color: '#f8f8f2',
    overflow: 'hidden',
    padding: '20px',
    margin: '20px',
  },
  moviePoster: {
    width: 'auto',
    height: 'auto',
    borderRadius: '8px',
    marginRight: '20px',
  },
  movieInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  movieTitle: {
    marginTop: 0,
    color: 'white',
    fontSize: '50px',
    fontFamily: 'Fenix',
    textAlign: 'center',
    fontWeight: 100,
    marginBottom: '10px'
  },
  movieParagraph: {
    margin: '8px 0',
    fontFamily: 'Urbanist',
    fontSize: '28px',
    fontWeight: 100,
  },
  movieRating: {
    margin: '8px 0',
    fontFamily: 'Urbanist',
    fontSize: '28px',
    fontWeight: 100,
    marginRight: '15px',
  },
  star: {
    color: '#f1fa8c',
  },
  commentButton: {
    backgroundColor: '#FCA600',
    color: 'white',
    borderRadius: '15px',
    padding: '10px 20px',
    alignSelf: 'center',
    marginTop: 'auto',
    fontWeight: '200px',
    '&:hover': {
      backgroundColor: '#ff7b52',
    },
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'left',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  dialogTextField: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#6a1b9a',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#6a1b9a',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#6a1b9a',
    },
    '& .MuiInputLabel-outlined': {
      color: '#6a1b9a',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: '#6a1b9a',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#6a1b9a',
    },    
  },
  dialogPaper: {
    width: '30%',
    maxWidth: 'none',
    height: '39%',
    backgroundColor: 'white',
    opacity: 1
  },
  dialogTitle: {
    color: '#6a1b9a',
  }
}));

const MovieCard = ({ title, duration, director, releaseDate, nominations, rating, imageUrl }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.movieCard}>
      <img src={imageUrl} alt={`${title} poster`} className={classes.moviePoster} />
      <div className={classes.movieInfo}>
        <p className={classes.movieTitle}>{title}</p>
        <p className={classes.movieParagraph}><strong>Tempo de duração:</strong> {duration}</p>
        <p className={classes.movieParagraph}><strong>Diretor:</strong> {director}</p>
        <p className={classes.movieParagraph}><strong>Data de lançamento:</strong> {releaseDate}</p>
        <p className={classes.movieParagraph}><strong>Indicações:</strong> {nominations}</p>
        <div className={classes.ratingContainer}>
          <span className={classes.movieRating}><strong>Sua avaliação:</strong></span>
          <Rating name="half-rating" defaultValue={1.0} precision={0.5} />
        </div>
        <Button className={classes.commentButton} onClick={openDialog}>Adicionar Comentário</Button>
        <Dialog open={open} onClose={closeDialog} PaperProps={{ className: classes.dialogPaper }}>
          <DialogTitle className={classes.dialogTitle} id='dialog-content'><strong>Comentário</strong></DialogTitle>
          <DialogContent>
            <Stack spacing={2} margin={2}>
              <TextField className={classes.dialogTextField} variant='outlined' label='Título do comentário'></TextField>
              <TextField className={classes.dialogTextField} variant='outlined' label='Comentário' multiline rows ={5}></TextField>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color="primary" onClick={closeDialog}>Enviar</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  nominations: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MovieCard;
