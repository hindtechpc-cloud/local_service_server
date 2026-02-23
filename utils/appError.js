class AppError extends Error {
  constructor(messae, statusCode) {
    super(messae, statusCode);
  }
  message = this.message;
  statusCode = this.statusCode;
}
