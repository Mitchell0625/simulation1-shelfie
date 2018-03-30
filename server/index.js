require("dotenv").config();
const massive = require("massive");
const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = express();
app.use = json();
app.use = cors();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  console.log(dbInstance);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
