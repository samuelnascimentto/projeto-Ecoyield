var kpiGraficoModel = require("../models/kpiGraficoModel.js");

function mostrarUltimoAlerta(req, res) {
  var idConjunto = req.params.idConjunto;

  kpiGraficoModel.mostrarUltimoAlerta(idConjunto).then((resultado) => {
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

function mostrarMaiorTemperatura2h(req, res) {
  var idConjunto = req.params.idConjunto;

  kpiGraficoModel.mostrarMaiorTemperatura2h(idConjunto).then((resultado) => {
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

function mostrarMaiorUmidade2h(req, res) {
  var idConjunto = req.params.idConjunto;

  kpiGraficoModel.mostrarMaiorUmidade2h(idConjunto).then((resultado) => {
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
  mostrarUltimoAlerta,
  mostrarMaiorTemperatura2h,
  mostrarMaiorUmidade2h
}