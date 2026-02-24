import { createAccountService } from "../services/auth.services.js";
import { asyncHandler } from "../utils/asyncHandller.js";


export const createAccount = asyncHandler(async (req, res,next) => {
  await createAccountService(req, res,next);
});
