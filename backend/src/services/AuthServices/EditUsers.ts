import UserClients from "../../classes/UserClients";


const EditUsers = async (id: number, name: string,username:string,password:string,favoriteMovie:string,favoriteGenre:string,evaluatedFilms:number): Promise<UserClients> => {
    const userClient = await UserClients.findOne({
        where: { id }
      });
  
    return await userClient.update({id,name,username,password,favoriteMovie,favoriteGenre,evaluatedFilms});
  };
  
  export default EditUsers;