module.exports = {
  create: (req, res, next) => {},
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
