const express = require("express");
const app = express();
const port = 3000;
// const db = require("./database/models");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/products", require("./routes/products.routes"));
app.use("/categories", require("./routes/categories.routes"));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  // db.sequelize.sync({ force: true });
});
