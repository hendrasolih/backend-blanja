productsRouter.put("/:id", (req, res) => {
    // mendapat objek request dari client
    // melakukan query ke db
    // mengirim response
    const { body } = req;
    const { id } = req.params;
    const updateProductById = {
      ...body,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    };
    const postNewProduct = new Promise((resolve, reject) => {
      const qs = "UPDATE products SET prd_name = ?, prd_brand = ?, prd_price = ?, cndtn_id = ?, prd_description = ?, size_id = ?, prd_image = ?, prd_ctg = ? WHERE prd_id = ?";
      db.query(qs, updateProductById, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
    postNewProduct
      .then((data) => {
        const resObject = {
          msg: "Data berhasil dimasukkan",
          data: { id: data.insertId, ...updateProductById },
        };
        res.json(resObject);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  