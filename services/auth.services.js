import { User } from "../models/User.js";
import AppError from "../utils/appError.js";
import { asyncHandler } from "../utils/asyncHandller.js";
import { comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import { errorResponse, successResponse } from "../utils/response.js";

export const createAccountService = asyncHandler(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    profilePicture: req?.file?.path,
  });

  if (!user) {
    next(new AppError("user not created", 400));
  }

  const token = generateToken(user, next);

  if (!token) {
    return next(new AppError("token not generated", 500));
  }
  return successResponse(
    201,
    "created successfully",
    { user, token },
    res,
    req,
  );
});

export const loginService = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // find user with email 
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new AppError("user not exist with this email ", 404);
  }
  // comparePassword password 
  const isMatchedPassword=comparePassword(password,user.password);
if(!isMatchedPassword){
  throw new AppError(" incorrect password",400);
}
// genearet token 
const token=generateToken(user);
if(!token){
  throw new AppError("token not not genaretd ",500);
}

successResponse(200,"loggedin successfully",{user,token},res,req)
});
