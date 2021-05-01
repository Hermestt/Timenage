import { Router } from "express";
import handleAuth from "../controllers/authController";
import hasBody from "../middlewares/hasBody";

export const authRouter = Router();
authRouter.post("/login", hasBody, handleAuth);
