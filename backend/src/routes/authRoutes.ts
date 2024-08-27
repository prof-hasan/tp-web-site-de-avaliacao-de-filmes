import { Router } from "express";

import * as AuthController from "../controllers/AuthController";

const authRoutes = Router();

authRoutes.post("/auth",  AuthController.verifyUser);


export default authRoutes;
