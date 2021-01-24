exports.seller = (req, res, next) => {
  const { level } = req.decodedToken;
  console.log(`ini level: ${level}`);
  if (level != "Customer") {
    form.error(res, {
      status: 401,
      msg: `Unauthorized Access`,
      details: `Yout dont have permission to access this page.`,
    });
  } else {
    next();
  }
};
