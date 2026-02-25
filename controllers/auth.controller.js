import { createAccountService } from "../services/auth.services.js";
import { asyncHandler } from "../utils/asyncHandller.js";


export const createAccount = asyncHandler(async (req, res,next) => {
 await createAccountService(req, res,next);

});

export const login = asyncHandler(async (req, res,next) => {
 await loginService(req, res,next);
});
