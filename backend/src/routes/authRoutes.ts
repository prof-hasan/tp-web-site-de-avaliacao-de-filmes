import { Router } from "express";

import * as AuthController from "../controllers/AuthController";


const authRoutes = Router();

authRoutes.post("/auth",  AuthController.verifyUser);
authRoutes.post("/createUser", AuthController.createUser);
authRoutes.get("/getUsers", AuthController.getUsers);


export default authRoutes;
