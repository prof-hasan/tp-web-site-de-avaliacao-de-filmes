import React from 'react';
import MovieInfo from '../../components/movieInfo';
import poster from '../../assets/posterUmSonhoDeLiberdade.jpg'
import profile from '../../assets/deadpool.jpg'
import Header from "../../components/header";
import Comment from "../../components/comment";

const App = () => {
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
    rating: 5
  };

  return (
    <div className="app">
      <Header/>
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
    </div>
  );
};

export default App;