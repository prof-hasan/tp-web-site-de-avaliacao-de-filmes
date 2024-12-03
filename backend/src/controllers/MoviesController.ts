import { Request, Response } from "express";
import GetMovies from "../services/MoviesServices/GetMovies";

type MovieData = {
    id : number;
    title : string;
    genre : string;
    director : string;
    actors : string;
    releaseDate : string;
    awards : string;
    duration : string;
    image : string;
}

export const getMovies = async (req: Request, res: Response): Promise<Response> => {
    const  data  = await GetMovies();
    return res.json({ data });
};


