module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req);
    const { product_name, price, image_url } = req.body;
    dbInstance
      .create_product([product_name, price, image_url])
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  update: (req, res, next) => {},

  read: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance.get_inventory().then(products => {
      console.log(products);
      res
        .status(200)
        .json(products)
        .catch(console.log("no good"));
    });
  },
  delete: (req, res, next) => {}
};
