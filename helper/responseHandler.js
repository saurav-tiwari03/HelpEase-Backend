exports.responseHandler = (status, success, data, message, res) => {
  const statusCode = status || 200;
  return res.status(statusCode).json({ success, data, message });
};

exports.errorHandler = (statusCode = 500,data,res,message) => {
  return res.status(statusCode).json({ success, data, message });
};
