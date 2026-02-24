import { User } from "../models/User.js";
import AppError from "../utils/appError.js";
import { successResponse } from "../utils/response.js";

export const createAccountService = async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    profilePicture: req.file.path,
  });

  if (!user) {
    next(new AppError("user not created", 400));
  }
  return successResponse(
    201,
    "created successfully",
    { body: req.body, profilePicture: req.file },
    res,
    req,
  );
};
