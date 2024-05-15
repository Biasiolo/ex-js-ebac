"use strict";

var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 4
}, {
  nome: 'Lucas',
  nota: 6
}];
add;
var filtraAlunosAprovados = function filtraAlunosAprovados(alunos) {
  return alunos.filter(function (_ref) {
    var nota = _ref.nota;
    return nota >= 6;
  });
};
var alunosAprovados = filtraAlunosAprovados(alunos);
console.log(alunosAprovados);