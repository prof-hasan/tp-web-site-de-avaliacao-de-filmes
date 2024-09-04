import { Request, Response } from "express";
import VerifyUserService from "../services/AuthServices/VerifyUserService";
import CreateUserService from "../services/CreateUserServices/CreateUserService";
import GetUsers from "../services/AuthServices/GetUsers";
import EditUsers from "../services/AuthServices/EditUsers";

type UserData = {
    id : number;
    name : string;
    username : string;
    password : string;
    favoriteMovie : string;
    favoriteGenre : string;
    evaluatedFilms : number;
}

export const verifyUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserData = req.body;
  const  loggedUser  = await VerifyUserService(user.username, user.password);

  return res.json({ loggedUser });
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserData = req.body;
  console.log(user);
  const  userCreated  = await CreateUserService(user.name, user.username, user.password, user.favoriteGenre, user.favoriteMovie, user.evaluatedFilms);
  
  return res.json({ userCreated });
};

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const  data  = await GetUsers();
  return res.json({ data });
};

export const editUsers = async (req: Request, res: Response): Promise<Response> => {
  const user: UserData = req.body;
  const  userEdited  = await EditUsers(user.id, user.name, user.username, user.password, user.favoriteMovie, user.favoriteGenre, user.evaluatedFilms);

  return res.json({ userEdited });
};


