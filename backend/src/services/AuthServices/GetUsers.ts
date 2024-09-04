import UserClients from "../../classes/UserClients";

const GetUsers = async (): Promise<UserClients[]> => {
    const users = await UserClients.findAll({
        attributes: ["id", "username", "password","name","favoriteMovie","favoriteGenre","evaluatedFilms"] ,
    });
    
    return users;
  };
  
  export default GetUsers;