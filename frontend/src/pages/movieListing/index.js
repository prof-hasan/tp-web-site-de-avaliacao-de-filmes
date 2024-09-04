import React, { useState, useContext, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Header from "../../components/header";
import MovieCard from '../../components/movieCard';
import useMovies from "../../hooks/useMovies";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// const movies = [
//   {
//     title: "Super Bad",
//     genre: "Comédia/Adolescente",
//     duration: "1h 59m",
//     year: 2007,
//     platform: "Netflix",
//     rating: 3,
//     seen: true
//   },
//   {
//     title: "Vingadores: Ultimato",
//     genre: "Ação/Ficção Científica",
//     duration: "3h 2m",
//     year: 2019,
//     platform: "Disney+",
//     rating: 5,
//     seen: true
//   },
//   {
//     title: "Um sonho de liberdade",
//     genre: "Thriller/Ficção Policial",
//     duration: "2h 22m",
//     year: 1994,
//     platform: "HBO Max",
//     rating: 5,
//     seen: true
//   },
//   {
//     title: "Não olhe para cima",
//     genre: "Comédia/Ficção Científica",
//     duration: "2h 18m",
//     year: 2021,
//     platform: "Netflix",
//     rating: 0, 
//     seen: false
//   },
//   {
//     title: "Pobres Criaturas",
//     genre: "Comédia/Ficção Científica",
//     duration: "2h 2m",
//     year: 2023,
//     platform: "Star+",
//     rating: 2,
//     seen: false
//   },
// ];

const MovieListing = () => {
  const classes = useStyles();
  const { getMovies } = useMovies();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getMovies();
    console.log(data);
    setMovies(data);
  };

  const handleCardClick = (movie) => {
    navigate(`../movieInfo`, { state: { movie } });
  };

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.container}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={handleCardClick}/>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MovieListing;
