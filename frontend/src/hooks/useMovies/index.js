import api from "../../api";

const useMovies = () => {

  const getMovies = async () => {
    try {
      const { data } = await api.get("/getMovies");
      return data.data;
    }catch(err){
        console.error(err)
    }
  };

  return {
    getMovies
  };

};
export default useMovies;
