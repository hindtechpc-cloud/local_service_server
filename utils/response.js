import AppError from "./appError.js";

export const successResponse = (
  status,
  message,
  data,
  res,
  req,
  page,
  limit,
  currentPage,
) => {
  return res.status(status).json({
    message,
    data,
    page,
    limit,
    currentPage,
  });
};

export const errorResponse = (status, message, res, req, error,next) => {
  return next(new AppError("error",500,error))
};
