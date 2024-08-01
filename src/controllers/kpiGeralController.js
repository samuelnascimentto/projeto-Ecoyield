var kpiGeralModel = require("../models/kpiGeralModel.js");

function mostrarTotalConjSensores(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTotalConjSensores(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTotalConjSensoresAlerta(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTotalConjSensoresAlerta(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTotalAlertaUltimas2h(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTotalAlertaUltimas2h(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarDeptoUltimoAlerta(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarDeptoUltimoAlerta(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTempIrregular2h(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTempIrregular2h(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarUmidIrregular2h(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarUmidIrregular2h(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    mostrarTotalConjSensores,
    mostrarTotalConjSensoresAlerta,
    mostrarTotalAlertaUltimas2h,
    mostrarDeptoUltimoAlerta,
    mostrarTempIrregular2h,
    mostrarUmidIrregular2h
}