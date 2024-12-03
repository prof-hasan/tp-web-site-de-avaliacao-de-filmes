import React, { useState, useContext, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Header from "../../components/header";
import MovieCard from '../../components/movieCard';
import useMovies from "../../hooks/useMovies";
import { useLocation, useNavigate } from 'react-router-dom';

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


const MovieListing = () => {
  const classes = useStyles();
  const { getMovies } = useMovies();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    getData(searchTerm);
  }, [location.search]);

  const getData = async (searchTerm) => {
    const data = await getMovies();
    if (searchTerm) {
      const filteredMovies = data.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMovies(filteredMovies);
    } else {
      setMovies(data);
    }
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
