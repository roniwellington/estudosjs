//DESAFIO - MÉDIA
//Calcular a média entre as sequintes notas: 10, 6.5,8,7.5

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

//posições:     0    1   2   3   
const notas = [10, 6.5, 8, 7.5]//Criando o array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)

//Imprimindo o item na posição 2:
console.log(notas[2]);//imprime o número 8

//como funcionan os arrays

//notas [10 | 6.5 | 8 | 7.5]<= elementos/itens/ valores
//       0     1     2   3  <= índices/ posições