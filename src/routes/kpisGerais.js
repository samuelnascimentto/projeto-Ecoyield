var express = require("express");
var router = express.Router();

var kpiGeralController = require("../controllers/kpiGeralController.js");

router.get("/conjTotal/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTotalConjSensores(req, res);
});

router.get("/conjAlerta/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTotalConjSensoresAlerta(req, res);
});

router.get("/qtdAlerta2h/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTotalAlertaUltimas2h(req, res);
});

router.get("/ultimoAlertaDepto/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarDeptoUltimoAlerta(req, res);
});

router.get("/tempIrregular2h/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTempIrregular2h(req, res);
});

router.get("/umidIrregular2h/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarUmidIrregular2h(req, res);
});


module.exports = router;