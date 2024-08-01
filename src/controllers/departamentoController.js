var departamentoModel = require("../models/departamentoModel");

function buscarDepartamentosPorEmpresa(req, res) {
  var empresaId = req.params.empresaId;

  departamentoModel.buscarDepartamentosPorEmpresa(empresaId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarDepartamentosPorEmpresa,
}