"use strict";

// Array de objetos com nome e nota de 5 alunos
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

// Função para retornar alunos com nota maior ou igual a 6
var filtraAlunosAprovados = function filtraAlunosAprovados(alunos) {
  return alunos.filter(function (_ref) {
    var nota = _ref.nota;
    return nota >= 6;
  });
};

// Usando a função
var alunosAprovados = filtraAlunosAprovados(alunos);

// Exibindo o resultado
console.log(alunosAprovados);