//DESAFIO- Adicionando elementos
//Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno: 10, 6 e 8
//Para corrigir, adicione a nota 7 e faça o calculo da média correta.

const notas = [10, 6, 8];
// console.log(notas)


notas.push(7);
// console.log(notas)

const media = (notas [0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);