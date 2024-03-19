const express = require("express");
const router = express.Router();

const { getList, getPokemon } = require("../controllers/dolars.controllers");

router.get("/", getList);
router.get("/pokemon", getPokemon);

module.exports = router;
