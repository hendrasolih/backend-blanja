module.exports = {
  success: (res, data) => {
    const resObject = {
      status: 200,
      data,
    };
    res.json(resObject);
  },
  error: (res, err) => {
    res.status(err.status || 500).json(err);
  },
};
