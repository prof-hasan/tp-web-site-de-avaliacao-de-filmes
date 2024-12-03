import UserClients from "../../classes/UserClients";

const CreateUserService = async (name: string,username:string,password: string, favoriteGenre: string, favoriteMovie: string, evaluatedFilms: number): Promise<UserClients> => {
    return await UserClients.create({name, username, password, favoriteGenre, favoriteMovie, evaluatedFilms});
  };
  
  export default CreateUserService;