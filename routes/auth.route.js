import express from "express";
import { upload } from "../middlewares/upload.js";
import { createAccount } from "../controllers/auth.controller.js";

const router=express.Router();

router.post("/register",upload.single("profilePicture"),createAccount);


export const authRouter=router;