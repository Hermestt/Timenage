import { Router } from "express";
import handleUserRegistration from "../controllers/userController";
import hasBody from "../middlewares/hasBody";

export const userRouter = Router();
userRouter.post("/register", hasBody, handleUserRegistration);
