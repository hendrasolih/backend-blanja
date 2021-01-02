const reviewsModel = require("../models/reviewsModel");
const form = require("../helpers/form");

module.exports = {
  postNewReview: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const insertBody = {
      ...body,
      prd_id: id,
    };
    reviewsModel
      .postReview(insertBody)
      .then((data) => {
        console.log(data);
        res.json({
          msg: "review berhasil ditambahakan",
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  getReview: (req, res) => {
    const { id } = req.params;
    reviewsModel
      .getReview(id)
      .then((data) => {
        console.log(data);
        res.json({
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  getRating: (req, res) => {
    const { id } = req.params;
    reviewsModel
      .getRatings(id)
      .then((data) => {
        console.log(data);
        res.json({
          ratings: Number(data),
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
