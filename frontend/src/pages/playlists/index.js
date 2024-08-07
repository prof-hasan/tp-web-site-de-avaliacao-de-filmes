import React, { useState } from 'react';
import Header from "../../components/header";
import MovieBox from "../../components/movieBox";
import { makeStyles } from '@material-ui/core/styles';

import image1 from "../../assets/capasDosFilmes/heroes.jpg";
import image2 from "../../assets/capasDosFilmes/stepmom.jpg";
import image3 from "../../assets/capasDosFilmes/classicos.jpg";
import image4 from "../../assets/capasDosFilmes/robertDowneyJr.jpg";
import image5 from "../../assets/capasDosFilmes/police.jpg";
import image6 from "../../assets/capasDosFilmes/harryPotter.jpg";
import image7 from "../../assets/capasDosFilmes/grownUps.jpg";
import image8 from "../../assets/capasDosFilmes/fastAndFurious.jpg";
import image9 from "../../assets/capasDosFilmes/corra.jpg";
import image10 from "../../assets/capasDosFilmes/documentary.jpg";

const useStyles = makeStyles((theme) => ({
  app: {
    padding: '20px',
    color: '#fff',
    minHeight: '100vh',
  },
  section: {
    margin: '20px 0',
  },
  sectionTitle: {
    marginTop: '50px',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  slider: {
    display: 'flex',
    overflow: 'hidden',
    width: 'calc(100% - 60px)', // Ajustando para deixar espaço para as setas
  },
  arrow: {
    cursor: 'pointer',
    fontSize: '30px',
    color: '#fff',
    userSelect: 'none',
  },
  hide: {
    display: 'none',
  }
}));

const App = () => {
  const classes = useStyles();

  const list = [
    { image: image1, name: 'Heróis', author: '@Santos', moviesNumber: 38 },
    { image: image2, name: 'Para chorar', author: '@MahR5', moviesNumber: 12 },
    { image: image3, name: 'Clássicos', author: '@MahR5', moviesNumber: 24 },
    { image: image4, name: 'Com Robert Downey Jr', author: '@Santos', moviesNumber: 28 },
    { image: image5, name: 'Policiais', author: '@Vini', moviesNumber: 31 },
  ];

  const genres = [
    { image: image6, name: 'Fantasia', author: '@LMV', moviesNumber: 67 },
    { image: image7, name: 'Comédia', author: '@LMV', moviesNumber: 32 },
    { image: image8, name: 'Ação', author: '@LMV', moviesNumber: 25 },
    { image: image9, name: 'Suspense', author: '@LMV', moviesNumber: 16 },
    { image: image10, name: 'Documentários', author: '@LMV', moviesNumber: 10 },
  ];

  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);

  const handlePreviousList = () => {
    setCurrentListIndex((prev) => (prev === 0 ? list.length - 4 : prev - 1));
  };

  const handleNextList = () => {
    setCurrentListIndex((prev) => (prev === list.length - 4 ? 0 : prev + 1));
  };

  const handlePreviousGenre = () => {
    setCurrentGenreIndex((prev) => (prev === 0 ? genres.length - 4 : prev - 1));
  };

  const handleNextGenre = () => {
    setCurrentGenreIndex((prev) => (prev === genres.length - 4 ? 0 : prev + 1));
  };

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.section}>
        <div className={classes.sectionTitle}>Minhas listas</div>
        <div className={classes.sliderContainer}>
          <div className={classes.arrow} onClick={handlePreviousList}>‹</div>
          <div className={classes.slider}>
            {list.slice(currentListIndex, currentListIndex + 4).map((item, index) => (
              <MovieBox
                key={index}
                movieListImage={item.image}
                listTitle={item.name}
                author={item.author}
                moviesNumber={item.moviesNumber}
              />
            ))}
          </div>
          <div className={classes.arrow} onClick={handleNextList}>›</div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.sectionTitle}>Meus gêneros mais assistidos</div>
        <div className={classes.sliderContainer}>
          <div className={classes.arrow} onClick={handlePreviousGenre}>‹</div>
          <div className={classes.slider}>
            {genres.slice(currentGenreIndex, currentGenreIndex + 4).map((item, index) => (
              <MovieBox
                key={index}
                movieListImage={item.image}
                listTitle={item.name}
                author={item.author}
                moviesNumber={item.moviesNumber}
              />
            ))}
          </div>
          <div className={classes.arrow} onClick={handleNextGenre}>›</div>
        </div>
      </div>
    </div>
  );
};

export default App;
