import React, { useState } from 'react';
import MovieInfo from '../../components/movieInfo';
import poster from '../../assets/umSonhoDeLiberdade.jpg';
import profile from '../../assets/deadpool.jpg';
import profile2 from '../../assets/adamSandler.jpg';
import profile3 from '../../assets/divertidamente.jpg';
import Header from "../../components/header";
import Comment from "../../components/comment";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

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

  const location = useLocation();
  const { movie } = location.state;  // Acesse o filme do estado

  const comments = {
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
        imageUrl={movie.image}
      />
      <Comment
        profileImageUrl={comments.profilePic}
        username={comments.user}
        comment={comments.comment}
        rating={comments.rating}
      />
      {showSecondComment && (
        <Comment
          profileImageUrl={comments.profilePic2}
          username={comments.user2}
          comment={comments.comment2}
          rating={comments.rating2}
        />
      )}
      {showSecondComment && (
        <Comment
          profileImageUrl={comments.profilePic3}
          username={comments.user3}
          comment={comments.comment3}
          rating={comments.rating3}
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
