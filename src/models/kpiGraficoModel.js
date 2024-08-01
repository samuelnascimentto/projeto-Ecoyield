var database = require("../database/config");

function mostrarUltimoAlerta(idConjunto) {

  var instrucaoSql = `select
        lt.id,
        date_format(lt.dtHora, '%d/%m/%y as %H:%i') momento,
        lt.dtHora,
        lt.temperatura temp
        from leitura lt
        inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join departamento depto on cs.fkdepartamento = depto.id
        where cs.id = ${idConjunto} and (temperatura > 25.00 or temperatura < 18.00)
        group by lt.dtHora, momento, temp, lt.id
        order by lt.id desc
        limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mostrarMaiorTemperatura2h(idConjunto) {

  var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%H:%i') momento,
        lt.dtHora,
        round(lt.temperatura, 1) temp
        from leitura lt
        inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join departamento depto on cs.fkdepartamento = depto.id
        where cs.id = ${idConjunto} and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR)
        and (lt.temperatura > 25.00 or lt.temperatura < 18.00)
        order by lt.id desc
        limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mostrarMaiorUmidade2h(idConjunto) {

  var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%H:%i') momento,
        lt.dtHora,
        round(lt.umidade, 1) umid
        from leitura lt
        inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join departamento depto on cs.fkdepartamento = depto.id
        where cs.id = ${idConjunto} and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR)
        and (lt.umidade < 45.00 or lt.umidade > 55.00)
        order by lt.id desc
        limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  mostrarUltimoAlerta,
  mostrarMaiorTemperatura2h,
  mostrarMaiorUmidade2h
}
