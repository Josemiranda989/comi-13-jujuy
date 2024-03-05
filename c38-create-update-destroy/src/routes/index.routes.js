const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index.controllers");

router.get("/", indexController.artistas);
router.get("/multi", indexController.multiPromesa);
router.get("/clientes/:numerito", indexController.clientes);

router.get("/nuevoArtista/", indexController.nuevoArtistaForm);
router.post("/nuevoArtista", indexController.nuevoArtistaCreacion);

router.get("/editarArtista/:id", indexController.editarArtistaForm);
router.put("/editarArtista/:id", indexController.editarArtista);

router.delete("/eliminarArtista/:id", indexController.eliminarArtista);

module.exports = router;
