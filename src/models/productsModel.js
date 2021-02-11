const db = require("../configs/mySQL");

exports.getAllProductsModel = (req) => {
  const { filter, sortDesc, search, category } = req.query;
  const page = req.query.page || 1;
  const limit = Number(req.query.limit) || 4;
  const offset = (page - 1) * limit || 0;
  let order = "";
  let querysearch = "";
  let desc = "";
  let ctg = "";
  let lmt = "";
  //category
  if (category) {
    ctg = "AND ctg_name REGEXP " + "'" + category + "'";
  }
  // search
  if (search) {
    querysearch = "AND prd_name REGEXP " + "'" + search + "'";
  }
  // sort
  if (filter == "price") {
    order = "ORDER BY prd_price ";
  } else if (filter == "name") {
    order = "ORDER BY prd_name ";
  } else if (filter == "update ") {
    order = "ORDER BY updated_at ";
  } else if (filter == "rating") {
    order = "ORDER BY prd_rating DESC ";
  } else if (filter == "new") {
    order = "ORDER BY created_at DESC ";
  } else if (filter == "priceD") {
    order = "ORDER BY prd_price DESC ";
  } else {
    order = "";
    desc = "";
  }
  if (!order == "") {
    if (sortDesc == "true") {
      desc = " DESC ";
    }
  }
  //pagination
  let totalProduct = 0;

  const getTotalProduct = new Promise((resolve, reject) => {
    const qs =
      "SELECT COUNT(prd_id) AS COUNT FROM products JOIN category_product WHERE products.prd_ctg = category_product.ctg_id " +
      ctg +
      querysearch +
      order +
      desc;
    db.query(qs, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
  getTotalProduct
    .then((result) => {
      totalProduct = result[0].COUNT;
    })
    .catch((err) => {
      form.error(res, err);
    });

  return new Promise((resolve, reject) => {
    const queryString =
      "SELECT prd_id, prd_name, prd_brand, prd_price, prd_brand, prd_image, category_product.ctg_name, prd_rating, created_at FROM products JOIN category_product WHERE products.prd_ctg = category_product.ctg_id " +
      ctg +
      querysearch +
      order +
      desc +
      "LIMIT ? OFFSET ?";
    console.log(queryString);
    db.query(queryString, [Number(limit), offset], (err, data) => {
      console.log(totalProduct);
      const totalPage = Math.ceil(totalProduct / limit);
      const newResult = {
        products: data,
        pageInfo: {
          totalResults: totalProduct,
          totalPage: totalPage,
          currentPage: page || 1,
          previousPage:
            page == 1 ? null : `/products?page=${page - 1}&limit=${limit}`,
          nextPage:
            Number(page) === totalPage
              ? null
              : `/products?page=${Number(page) + 1}&limit=${limit}`,
        },
      };
      if (data.length == 0) {
        reject({
          msg: "data tidak tersedia",
        });
      }
      if (!err) {
        resolve(newResult);
      } else {
        reject(err);
      }
    });
  });
};

exports.postNewProduct = (req) => {
  // mendapat objek request dari client
  // melakukan query ke db
  // mengirim response
  //const img = process.env.SERVER + "/images/" + req.file.filename; for single
  console.log(req.files);
  const images = JSON.stringify(
    req.files.map((e) => process.env.RN + "/images/" + e.filename)
  );
  const { body } = req;
  const insertBody = {
    ...body,
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
    //prd_image: img,
    prd_image: images,
  };
  return new Promise((resolve, reject) => {
    const qs = "INSERT INTO products SET ?";
    db.query(qs, insertBody, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

exports.getAllWithRatings = () => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT p.prd_id, p.prd_name, p.prd_brand, p.prd_price, p.prd_description, p.size_id, p.prd_image, p.prd_ctg, p.prd_rating, COUNT(r.review) AS total_review,  AVG(r.rating) AS rating_product FROM products AS p LEFT JOIN reviews AS r ON p.prd_id = r.prd_id GROUP BY p.prd_id ORDER BY `total_review` DESC LIMIT 10";
    db.query(qs, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

exports.getFilter = (req) => {
  const { color, size, category, brand } = req.query;
  let clr = "";
  let sz = "";
  let ctg = "";
  let brn = "";
  if (color) {
    clr = `c.color_type in (${color})`;
  }
  if (color && size) {
    sz = ` AND s.size_prd in (${size})`;
  } else if (size) {
    sz = `s.size_prd in (${size})`;
  }
  if ((size && category) || (color && category)) {
    ctg = ` AND cp.ctg_name in (${category})`;
  } else if (category) {
    ctg = `cp.ctg_name in (${category})`;
  }
  if ((size && brand) || (color && brand) || (category && brand)) {
    brn = ` AND p.prd_brand in (${brand})`;
  } else if (brand) {
    brn = `p.prd_brand in (${brand})`;
  }
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT p.prd_id, p.prd_name, p.prd_brand, p.prd_price, p.prd_image, cp.ctg_name, prd_rating, created_at, c.color_type, s.size_prd FROM products as p LEFT JOIN category_product as cp ON p.prd_ctg = cp.ctg_id LEFT JOIN product_color as pc ON p.prd_id = pc.prd_id LEFT JOIN product_size as ps ON p.prd_id = ps.prd_id LEFT JOIN color as c ON pc.clr_id = c.id LEFT JOIN size as s ON ps.sz_id = s.size_id WHERE " +
      clr +
      sz +
      ctg +
      brn +
      "GROUP BY p.prd_id";
    db.query(qs, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};
