// Desafio = Sala divida
// Divida o s alunos da sala abaixo em duas listas com a mesma quantidade de alunos: 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos','Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Rinata', 'Daisy', 'Camilo'


const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos','Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Rinata', 'Daisy', 'Camilo']

alunos.slice(0,10)
console.log("Lista de todos os alunos ", alunos)

// const sala1 = alunos.slice(0, 10);
// console.log("lista de alunos da sala1", sala1)
// const sala2 = alunos.slice(10)
// console.log("Alunos da sala 2", sala2)

//melhorando o código
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log("Alunos da sala 01 ", sala1)
console.log("Alunos da sala 02 ", sala2)