const express = require("express");
const router = express.Router();

const { getList } = require("../controllers/products.controllers");

// Todos los productos http://localhost:3000/products
router.get("/", getList);

module.exports = router;
