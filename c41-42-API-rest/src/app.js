const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
// const db = require("./database/models");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./routes/dolars.routes"));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/categories", require("./routes/categories.routes"));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  // db.sequelize.sync({ force: true });
});
