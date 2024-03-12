const express = require("express");
const router = express.Router();

const { getList, getDetail } = require("../controllers/categories.controllers");

// Todas las categorias
router.get("/", getList);

// Detalle de un producto
router.get("/detail/:id", getDetail);

module.exports = router;
