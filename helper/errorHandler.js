exports.response = (status, success, message, res) => {
  const statusCode = status || 500;
  return res.status(statusCode).json({ success, message });
};
