import { Router } from "express";

import * as MoviesController from "../controllers/MoviesController";


const authRoutes = Router();

authRoutes.get("/getMovies",  MoviesController.getMovies);


export default authRoutes;
