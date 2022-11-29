//Desafio-Lista com 2 dimensões

//Crie uma lista com os seguintes alunos e alunas:
//"João", 'Juliana' , 'Caio','Ana

//Crie uma lista com as seguintes médias:
//10, 8, 7.5,9

//Crie uma lista que contém as duas listas acima.

const alunos = ['João','Juliana', ' Ana', 'Caio']
const medias = [10, 8, 7.5,9 ]

const listaDeAlunosEMedias = [alunos, medias];
console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}. A nota dessas aluna é ${listaDeAlunosEMedias[1][1]}`)

const funcionarios = [
    ['Ana', 'Juliana', 'Leonardo'],
    [30,35,28]
]

console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)