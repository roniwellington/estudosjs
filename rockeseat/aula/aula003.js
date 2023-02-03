//Criar um aplicativo de frases


//declaration - declaração da  função
// function statement

// function createPhrases(){
//     console.log('Estudodar é muito bom')
//     console.log('Paciência e persistência')
//     console.log('Revisão é mãe do aprendizado')
// }

// createPhrases()

// console.log('fim do programa')



//function expression
//function anonymous


//parâmetros
// const sum = function(number1, number2){
//     total = number1 + number2
//     return total
// }

// let number1 = 34;
// let number2 = 25

// sum(2,3)// arguments
// sum(number1,number2)
// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
// console.log(`o soma é ${sum(number1, number2)}`)

//função é um liquidificador

// function fazerSuco(fruta1, fruta2){
//     return 'suco de : ' + fruta1 + fruta2
// }

// const copo =  fazerSuco('banana ', 'maçâ')

// console.log(copo)



//function scope

// let subject = 'create video';

// function createThink(subject){
//     subject = 'study'
//     return subject
// }

// console.log(createThink(subject))
// console.log(subject)

// let subject

// function createThink(){
//     subject = 'study'
//     return subject
// }

// console.log(subject)
// console.log(createThink())
// console.log(subject)




//function hoisting

// sayMyName();

// function sayMyName(){
//     console.log('Mayk')
// }


//Arrow Function

// const sayMyName = (name) => {
//     console.log(name)
// }

// sayMyName('Roni')

//callback function

// function sayMyName(name){
//     console.log('antes de executar a funcao callback')

//     name()

//     console.log('depois de executar a callback')
// }

// sayMyName(() => {
//     console.log('estou em uma callback')
// })



/**
 * Function() constructor
 * 
 * expressão new
 * criar um novo objeto
 * this keyword
 */

// function Person(name){
//     this.name = name
//     this.walk = function(){
//         return this.name + " está andando"
//     }
// }
// const mayk = new Person('Mayk')
// const joao = new Person('joao')
// console.log(mayk.walk())
// console.log(joao.walk())
