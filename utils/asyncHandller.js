export const asyncHandller = (fn) => (req, res, next) => {
  return Promise(fn(req, res, next)).catch();
};



