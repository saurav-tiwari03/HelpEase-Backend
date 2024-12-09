exports.response = (status, success, data, message, res) => {
  const statusCode = status || 200;
  return res.status(statusCode).json({ success, data, message });
};
