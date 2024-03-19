const express = require("express");
const router = express.Router();

const {
  getList,
  getDetail,
  getOrder,
  setNewProduct,
} = require("../controllers/products.controllers");

// Todos los productos http://localhost:3000/products
router.get("/", getList);

// Detalle de un producto http://localhost:3000/products/detail/1
router.get("/detail/:id", getDetail);

// Productos ordenados por precio http://localhost:3000/products/order
router.get("/order", getOrder);

// Crear producto http://localhost:3000/products/create
router.post("/create", setNewProduct);

module.exports = router;
