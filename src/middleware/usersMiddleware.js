const logUsers = (req, res, next) => {
  console.log(`log terjadi request ke path ${req.path}`);
  next();
};

module.exports = logUsers;
