const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const db = require("./database/models");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./routes/countries.routes"));
app.use("/products", require("./routes/products.routes"));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  // require("./database/models").sequelize.sync({ force: true });
});
