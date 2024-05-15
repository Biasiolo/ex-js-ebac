
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Lucas', nota: 6 }
];
add
const filtraAlunosAprovados = (alunos) => alunos.filter(({ nota }) => nota >= 6);

const alunosAprovados = filtraAlunosAprovados(alunos);

console.log(alunosAprovados);
