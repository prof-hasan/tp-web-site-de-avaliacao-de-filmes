import { Request, Response } from "express";
import VerifyUserService from "../services/AuthServices/VerifyUserService";

type UserData = {
    username : string;
    password : string;
}

export const verifyUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserData = req.body;
  const  loggedUser  = await VerifyUserService(user.username, user.password);

  return res.json({ loggedUser });
};

