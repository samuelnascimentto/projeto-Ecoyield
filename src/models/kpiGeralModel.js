var database = require("../database/config");

function mostrarTotalConjSensores(idEmpresa) {

    var instrucaoSql = `select 
        count(cs.id) totalConj
        from conjuntoSensor cs
        inner join empresa emp on cs.fkempresa = emp.id
        where emp.id = ${idEmpresa}; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTotalConjSensoresAlerta(idEmpresa) {

    var instrucaoSql = `SELECT count(DISTINCT cs.id) AS totalConjAlerta
        FROM conjuntoSensor cs
        INNER JOIN empresa emp ON cs.fkempresa = emp.id
        INNER JOIN leitura lt ON lt.fkconjuntoSensor = cs.id
        WHERE cs.fkempresa = ${idEmpresa}
        and ((lt.temperatura > 25.00 or lt.temperatura < 18.00) or (lt.umidade < 45.00 or lt.umidade > 55.00))
        AND lt.dtHora = (
            SELECT MAX(dtHora)
            FROM leitura sub_lt
            WHERE sub_lt.fkconjuntoSensor = lt.fkconjuntoSensor
        );`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTotalAlertaUltimas2h(idEmpresa) {

    var instrucaoSql = `SELECT 
        count(lt.id) qtdAlertas2h
        FROM leitura lt
        inner join conjuntoSensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        WHERE emp.id = ${idEmpresa}
        and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR) 
        and ((lt.temperatura > 25.00 or lt.temperatura < 18.00) or (lt.umidade < 45.00 or lt.umidade > 55.00))
        ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarDeptoUltimoAlerta(idEmpresa) {

    var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%d/%m/%y as %H:%i') momento
        from departamento depto
        inner join conjuntoSensor cs on cs.fkdepartamento = depto.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join leitura lt on lt.fkconjuntoSensor = cs.id
        where emp.id = ${idEmpresa}
        and ((lt.temperatura > 25.00 or lt.temperatura < 18.00) or (lt.umidade < 45.00 or lt.umidade > 55.00))
        order by lt.id desc
        limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTempIrregular2h(idEmpresa) {

    var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%H:%i') momento,
        lt.dtHora,
        round(lt.temperatura, 1) temp
        from leitura lt
        inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join departamento depto on cs.fkdepartamento = depto.id
        where emp.id = ${idEmpresa} and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR)
        and (lt.temperatura > 25.00 or lt.temperatura < 18.00)
        order by lt.id desc
        limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarUmidIrregular2h(idEmpresa) {

    var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%H:%i') momento,
        lt.dtHora,
        round(lt.umidade, 1) umid
        from leitura lt
        inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join departamento depto on cs.fkdepartamento = depto.id
        where emp.id = ${idEmpresa} and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR)
        and (lt.umidade < 45.00 or lt.umidade > 55.00)
        order by lt.id desc
        limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarTotalConjSensores,
    mostrarTotalConjSensoresAlerta,
    mostrarTotalAlertaUltimas2h,
    mostrarDeptoUltimoAlerta,
    mostrarTempIrregular2h,
    mostrarUmidIrregular2h
}
