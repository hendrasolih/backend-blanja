const jwt = require("jsonwebtoken");

const form = require("../form");

module.exports = (req, res, next) => {
  const bearerToken = req.header("x-access-token");
  if (!bearerToken) {
    form.error(res, {
      msg: "Please Login First",
      status: 401,
    });
  }

  const token = bearerToken.split(" ")[1];
  try {
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    req.decodeToken = decodeToken;
    next();
  } catch (error) {
    form.error(res, {
      msg: "Invalid Token",
      error,
    });
  }
};
