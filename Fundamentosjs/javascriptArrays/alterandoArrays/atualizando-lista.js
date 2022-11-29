// Desafio = Atualizando elementos
//Crie uma lista de chamada com os seguintes alunos:
//'joão', 'Ana' , 'Caio','Lara','Marjorie','Leo'
//Porem, a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta sala. Atualize lista

const nomes = ['joão', 'Ana' , 'Caio','Lara','Marjorie','Leo'];

nomes.splice(1, 2, "Rodrigo");
console.log(nomes);