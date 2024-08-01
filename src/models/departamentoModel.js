var database = require("../database/config");

function buscarDepartamentosPorEmpresa(empresaId) {

  var instrucaoSql = `select 
    dep.id id,
    dep.nome nome,
    cjs.id idConjunto,
    cjs.numeroSensor numeroConjunto
    from departamento dep
    inner join conjuntoSensor cjs on cjs.fkdepartamento = dep.id
    inner join empresa emp on cjs.fkempresa = emp.id
    where emp.id = ${empresaId};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function buscarConjuntosPorDeptoEEmpresa(empresaId, deptoId) {

//   var instrucaoSql = `select
//                       cs.id id,
//                       dep.nome nome
//                       from departamento dep
//                       inner join conjuntoSensor cs on cs.fkdepartamento = dep.id
//                       inner join empresa emp on cs.fkempresa = emp.id
//                       where emp.id = ${empresaId} and dep.id = ${deptoId};`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

module.exports = {
  buscarDepartamentosPorEmpresa,
  // buscarConjuntosPorDeptoEEmpresa
}
