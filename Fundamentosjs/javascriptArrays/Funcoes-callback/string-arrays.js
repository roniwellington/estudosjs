const nome = 'Alura';

let nomeMaiuscula = '';

for (let i = 0; i < nome.length; i++){
    nomeMaiuscula += nome[i].toUpperCase()
}

console.log(nomeMaiuscula)

const nomeDoCurso = 'Fundamentos de JS';
const nomeDaPlataforma = ' Alura';

const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)