import React from 'react';
import MovieInfo from '../../components/movieInfo';
import poster from '../../assets/posterUmSonhoDeLiberdade.jpg'
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
      <Comment/>
    </div>
  );
};

export default App;