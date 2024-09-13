const alunos = parseInt(prompt("Digite o número total de estudantes:"));

let somaNotas = 0;
let maiorNota = -Infinity;
let menorNota = Infinity;
let contador = 0;

for (let i = 0; i < alunos; i++) {
    
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
    // Atualizar soma das notas
    somaNotas += nota;

    // Verificar e atualizar a maior nota
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    // Verificar e atualizar a menor nota
    if (nota < menorNota) {
        menorNota = nota;
    }
}

const media = somaNotas / alunos;

console.log(`Média da turma: ${media.toFixed(2)}`);
console.log(`Maior nota: ${maiorNota}`);
console.log(`Menor nota: ${menorNota}`);
