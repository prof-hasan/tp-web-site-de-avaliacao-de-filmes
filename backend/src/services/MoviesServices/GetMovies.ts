import Movies from "../../classes/Movies";

const GetMovies = async (): Promise<Movies[]> => {
    const movies = await Movies.findAll({
      attributes: ["id", "title", "genre", "director", "actors", "releaseDate", "awards","duration","image"],
    });
    
    return movies;
  };
  
  export default GetMovies;