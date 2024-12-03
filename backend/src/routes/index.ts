import { Router } from "express";

import authRoutes from "./authRoutes";
import moviesRoutes from "./moviesRoutes";


const routes = Router();

routes.use(authRoutes);
routes.use(moviesRoutes);


export default routes;
