var express = require("express");
var router = express.Router();

var departamentoController = require("../controllers/departamentoController");

router.get("/:empresaId", function (req, res) {
  departamentoController.buscarDepartamentosPorEmpresa(req, res);
});


module.exports = router;