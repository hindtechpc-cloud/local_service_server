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

export const errorResponse = (status, message, res, req, error) => {
  return res.status(status).json({
    message,
    error,
  });
};
