import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  movieCard: {
    display: 'flex',
    //backgroundColor: '#282a36',
    color: '#f8f8f2',
    //borderRadius: '8px',
    overflow: 'hidden',
    //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px',
  },
  moviePoster: {
    width: 'auto',
    height: 'auto',
    //maxWidth: '150px', // Limite máximo de largura para manter as proporções
    //maxHeight: 'auto', // Limite máximo de altura para manter as proporções
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
  star: {
    color: '#f1fa8c',
  },
  commentButton: {
    backgroundColor: '#FCA600',
    color: 'white',
    borderRadius: '8px',
    padding: '10px 20px',
    alignSelf: 'center',
    marginTop: 'auto',
    fontWeight: '200px',
    '&:hover': {
      backgroundColor: '#ff7b52',
    },
    flexDirection: 'column',
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > * + *': {
          marginTop: theme.spacing(1),
        },
    },
    dialog: {
      '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        backgroundColor: `#ffffff !important`, // Fundo branco
        color: '#000000', // Texto preto
      },
      '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main, // Fundo branco
        color: '#000000', // Texto preto
      },
    },
    dialogTitle: {
      fontFamily: 'Urbanist',
      color: '#000000', // Título preto
    },
    dialogContent: {
      display: 'flex',
      flexDirection: 'column',
      color: '#000000', // Texto preto
    },
    dialogTextField: {
      marginTop: theme.spacing(2),
      '& .MuiInputBase-root': {
        color: '#000000', // Texto do campo de entrada preto
      },
      '& .MuiInputLabel-root': {
        color: '#000000', // Rótulo do campo de entrada preto
      },
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#6a1b9a', // Cor da borda roxa
      },
    },
  },
}));

const MovieCard = ({ title, duration, director, releaseDate, nominations, rating, imageUrl }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
        {/* <p className={classes.movieParagraph}><strong>Sua avaliação:</strong> {rating} <span className={classes.star}>⭐</span></p> */}
        <div className={classes.ratingContainer}>
            <span className={classes.movieParagraph}><strong>Sua avaliação:  </strong></span>
            <Rating name="half-rating" defaultValue={1.0} precision={0.5} />
            {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
        </div>
        <Button className={classes.commentButton } onClick={handleClickOpen}>Adicionar Comentário</Button>
        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
          <DialogTitle className={classes.dialogTitle}>Adicionar Comentário</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText>
              Escreva seu comentário sobre o filme abaixo:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="comment"
              label="Comentário"
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              className={classes.dialogTextField}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary">
              Enviar
            </Button>
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
