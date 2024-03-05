const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");

const indexRoutes = require("./routes/index.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
