var database = require("../database/config");

function buscarUltimasMedidas(idConjunto, limite_linhas) {

    var instrucaoSql = `select
            lt.temperatura temp,
            lt.umidade umid,
            date_format(lt.dtHora, '%H:%i') horarioCaptura
            from leitura lt
            inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
            where cs.id = ${idConjunto}
            order by lt.id desc
            limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idConjunto) {

    var instrucaoSql = `select
            cs.id conjunto,
            lt.temperatura temp,
            lt.umidade umid,
            date_format(lt.dtHora, '%H:%i') horarioCaptura
            from leitura lt
            inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
            where cs.id = ${idConjunto} 
            order by lt.id desc
            limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
