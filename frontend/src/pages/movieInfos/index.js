import React, { useState } from 'react';
import MovieInfo from '../../components/movieInfo';
import poster from '../../assets/posterUmSonhoDeLiberdade.jpg';
import profile from '../../assets/deadpool.jpg';
import profile2 from '../../assets/adamSandler.jpg';
import profile3 from '../../assets/divertidamente.jpg';
import Header from "../../components/header";
import Comment from "../../components/comment";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#FCA600',
    color: 'white',
    borderRadius: '15px',
    padding: '10px 20px',
    alignSelf: 'center',
    marginTop: '15px',
    marginBottom: '30px',
    fontWeight: '200px',
    '&:hover': {
      backgroundColor: '#ff7b52',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
}));

const App = () => {
  const classes = useStyles();
  const [showSecondComment, setShowSecondComment] = useState(false);

  const movie = {
    title: 'Um sonho de liberdade',
    duration: '2h22min',
    director: 'Frank Darabont',
    releaseDate: '17 de março de 1995',
    nominations: 'Oscar de melhor ator, Oscar de melhor filme',
    rating: '4.5',
    imageUrl: poster, // Substitua pelo URL da imagem real
    profilePic: profile,
    user: '@DeadpoolSincero',
    comment: 'Sensacional! Chorei mais que o brasileiro vendo a Rebeca Andrade ganhando o ouro.',
    rating: 4,
    profilePic2: profile2,
    user2: '@galoDoido',
    comment2: 'Obra de arte absoluta! Lição de vida e aula de cinematografia. Amém Morgan Freeman!',
    rating2: 5,
    profilePic3: profile3,
    user3: '@joão7532_',
    comment3: 'Não gostei! Achei pesado e me senti mal',
    rating3: 2
  };

  const handleToggleComment = () => {
    setShowSecondComment(prevState => !prevState);
  };

  return (
    <div className="app">
      <Header />
      <MovieInfo
        title={movie.title}
        duration={movie.duration}
        director={movie.director}
        releaseDate={movie.releaseDate}
        nominations={movie.nominations}
        rating={movie.rating}
        imageUrl={movie.imageUrl}
      />
      <Comment
        profileImageUrl={movie.profilePic}
        username={movie.user}
        comment={movie.comment}
        rating={movie.rating}
      />
      {showSecondComment && (
        <Comment
          profileImageUrl={movie.profilePic2}
          username={movie.user2}
          comment={movie.comment2}
          rating={movie.rating2}
        />
      )}
      {showSecondComment && (
        <Comment
          profileImageUrl={movie.profilePic3}
          username={movie.user3}
          comment={movie.comment3}
          rating={movie.rating3}
        />
      )}
      <div className={classes.buttonContainer}>
        <Button className={classes.button} onClick={handleToggleComment}>
          {showSecondComment ? 'Ocultar' : 'Mostrar mais'}
        </Button>
      </div>
    </div>
  );
};

export default App;
