import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Avatar,
  CssBaseline,
  Grid,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Link,
  Button
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header"; // Ajuste o caminho conforme necessário

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    minWidth: 650,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const movies = [
  {
    title: "Super Bad",
    genre: "Comédia/Adolescente",
    duration: "1h 59m",
    year: 2007,
    platform: "Netflix",
    rating: 3
  },
  {
    title: "Vingadores: Ultimato",
    genre: "Ação/Ficção Científica",
    duration: "3h 2m",
    year: 2019,
    platform: "Disney+",
    rating: 5
  },
  {
    title: "Um sonho de liberdade",
    genre: "Thriller/Ficção Policial",
    duration: "2h 22m",
    year: 1994,
    platform: "HBO Max",
    rating: 5
  },
  {
    title: "Não olhe para cima",
    genre: "Comédia/Ficção Científica",
    duration: "2h 18m",
    year: 2021,
    platform: "Netflix",
    rating: 0 // Avaliar
  },
  {
    title: "Pobres Criaturas",
    genre: "Comédia/Ficção Científica",
    duration: "2h 2m",
    year: 2023,
    platform: "Star+",
    rating: 2
  },
];

const MovieListing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.container}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Poster</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell>Gênero</TableCell>
                  <TableCell>Duração</TableCell>
                  <TableCell>Ano</TableCell>
                  <TableCell>Plataforma</TableCell>
                  <TableCell>Avaliação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies.map((movie) => (
                  <TableRow key={movie.title}>
                    <TableCell>
                      <Avatar className={classes.avatar} src={`path_to_images/${movie.title.replace(/\s/g, '_')}.jpg`} />
                    </TableCell>
                    <TableCell>{movie.title}</TableCell>
                    <TableCell>{movie.genre}</TableCell>
                    <TableCell>{movie.duration}</TableCell>
                    <TableCell>{movie.year}</TableCell>
                    <TableCell>{movie.platform}</TableCell>
                    <TableCell>
                      {movie.rating ? (
                        <Box className={classes.rating}>
                          {Array.from({ length: movie.rating }).map((_, index) => (
                            <span key={index}>⭐</span>
                          ))}
                        </Box>
                      ) : (
                        <Button variant="contained" color="primary">Avaliar</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </div>
  );
};

export default MovieListing;
