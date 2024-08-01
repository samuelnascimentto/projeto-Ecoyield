var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController.js");

router.get("/ultimaLeitura/:idConjunto", function (req, res) {
    alertaController.mostrarUltimaLeitura(req, res);
});

module.exports = router;