import { validationResult } from "express-validator";
import AppError from "../utils/appError.js";

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((err) => ({
      field: err.path,
      message: err.msg,
    }));
    next(formattedErrors);
  }
  next();
};

export default validate;
