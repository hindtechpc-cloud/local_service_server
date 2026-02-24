export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Default values
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Handle specific errors
  if (err.name === "ReferenceError") {
    return res.status(500).json({
      success: false,
      message: "Something undefined was used in the code",
    });
  }

  // If error is operational (created using AppError)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Programming / unknown errors
  return res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
};