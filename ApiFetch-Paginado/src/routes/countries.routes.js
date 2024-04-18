const express = require("express");
const router = express.Router();

const {
  getListV1,
  getListV2,
} = require("../controllers/countries.controllers");

router.get("/", getListV1);
router.get("/v2", getListV2);

module.exports = router;
