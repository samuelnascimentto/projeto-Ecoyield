var database = require("../database/config");

function mostrarUltimaLeitura(idConjunto) {

    var instrucaoSql = `select
			depto.nome depto,
            cs.id conjunto,
            lt.temperatura temp,
            lt.umidade umid,
            date_format(lt.dtHora, '%H:%i') horarioCaptura
            from leitura lt
            inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
            inner join departamento depto on cs.fkdepartamento = depto.id
            where cs.id = ${idConjunto}
            order by lt.id desc
            limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarUltimaLeitura
}
