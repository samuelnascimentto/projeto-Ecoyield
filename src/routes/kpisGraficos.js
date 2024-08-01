var express = require("express");
var router = express.Router();

var kpiGraficoController = require("../controllers/kpiGraficoController.js");

router.get("/ultimoAlerta/:idConjunto", function (req, res) {
    kpiGraficoController.mostrarUltimoAlerta(req, res);
});

router.get("/maiorTemperatura2h/:idConjunto", function (req, res) {
    kpiGraficoController.mostrarMaiorTemperatura2h(req, res);
});

router.get("/maiorUmidade2h/:idConjunto", function (req, res) {
    kpiGraficoController.mostrarMaiorUmidade2h(req, res);
});

module.exports = router;