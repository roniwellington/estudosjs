// let nota = 80;
// let frequencia = 75;

// if(nota >= 50 && frequencia >= 75){
//     console.log("Aluno Aprovado")
// } else {
//     console.log('Aluno Reprovado')
// }

// let x = 0;

// while(x <= 10){
//     console.log(x);
//     x++
// }

// for (x= 1; x <= 10; x++){
//     console.log(x)
// }

// let x = ["Juliana", "Maria"];
// console.log(x[0])

//função

// function teste(){
//     let x = 10;
//     let y = 5;
//     let z = x + y;
//     console.log("O resultado da soma é  " + z)
// }

// teste()

// Função com passagem de parametros

// function dobro(x){
//     y = x * 2;
//     console.log("O dobro de " + x + " e " + y)
// }

// let valor =5;
// dobro(valor);

// let valor2 = 100;
// dobro(valor2)



// Método POP,
// PUSH, Shift e UnShift

// let v = ['Cadeira', 'Tv', 'Sofá'];
// console.log(v);

// v.pop()
// console.log(v)

// v.pop()
// console.log(v)

// POP remove o ultimo registro do vetor

// v.push('Mesa', 'mocho')
// console.log(v)

//PUSH adiciona um registro na ultima casa do vetor

// v.shift()
// console.log(v)

//SHIFT apaga o primeiro registro de um vetor

// v.unshift('notbook')

// console.log(v)

//unshift adiciona registro na primeira casa do vetor

// function add(x){
//     v.push(x)
// }

// let v = ['Real Madri', 'Barcelona'];
// add('Milan');

// console.log(v)

// Método Splice

// let v = ['Ceará', 'Rio de Janeiro', 'Goiás','Amazonas']
// console.log(v);
// // v.splice(2,1)
// // v.splice(0,0, 'São Paulo')
// v.splice(4,0, 'São Paulo')
// console.log(v)


//metodo split

// let nome = 'João Silva Santos de Oliveira'
// console.log(nome)
// // let v = nome.split(" ")
// let v = nome.split(" ", 3)
// console.log(v)


//Delete e length

// let v = ['a', 'b', 'c', 'd']

// // delete v[1];
// console.log(v.length)
// console.log(v)


//FOR e VETORES

   //     0    1    2     3   
// let v = ['a', 'b', 'c', 'd'];

// for (let i = 0; i < v.length; i++) {
//     console.log(v[i]); 
// }

// class Pessoa {
//     constructor(nome, idade, salario){
//         this.nome = nome;
//         this.idade = idade;
//         this.salario = salario;
//     }

//     aumento(){//aumento nos valores
//         this.salario = this.salario * 1.1;
//     }
// }

// let nome1 = new Pessoa('Ana',20, 2000);
// let nome2 = new Pessoa('João',18, 1500);

// console.log(nome1);
// console.log(nome2);

// nome1.aumento()
// console.log(nome1)

class Funcionarios {
    constructor(nome){
        this.nome = nome;
        this.salario = 2000;

    }
}

class Professor extends Funcionarios{
    constructor(nome, materia){
        super(nome);
        this.materia = materia;
    }
}

let f1 = new Funcionarios('Mario');
console.log(f1);

let p1 = new Professor('Maria', 'Português');
console.log(p1);
let p2 = new Professor('João', 'Matematica');
console.log(p2);

