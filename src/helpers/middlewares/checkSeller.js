exports.seller = (req, res, next) => {
  const { level } = req.decodedToken;
  if (level != 2) {
    form.error(res, {
      status: 401,
      msg: `Unauthorized Access`,
      details: `Yout dont have permission to access this page.`,
    });
  } else {
    next();
  }
};
