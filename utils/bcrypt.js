
import { asyncHandler } from "./asyncHandller.js";
import bcrypt from "bcryptjs";
export const hashPassword = asyncHandler((password) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return hashedPassword;
});

export const comparePassword = asyncHandler((password, usePassword, next) => {
  const isPasswordMatched = bcrypt.compareSync(password, usePassword);
  if (isPasswordMatched) {
    return true;
  }
  return false;
});
