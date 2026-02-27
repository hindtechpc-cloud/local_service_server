import { createAccountService, loginService } from "../services/auth.services.js";
import { asyncHandler } from "../utils/asyncHandller.js";


export const createAccount = asyncHandler(async (req, res,next) => {
    // console.log(req.body);
  createAccountService(req, res,next);

});

export const login = asyncHandler(async (req, res,next) => {
  loginService(req, res,next);
});
