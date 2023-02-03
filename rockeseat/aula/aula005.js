/**
 * Expressões e Operadores
 * 
 * expressions
 * Operadores
 *      Binary
 *      Unary
 *      Ternary
 */

// let number = 1;

// (function(){
//     console.log('alo')
// })()





/**
 * new 
 * 
      *left-hand-side expression
      *criar um  novo objeto  
 */

// let name = new String('Mayk')
// name.surname = 'brito'
// let age = new Number(23)

// console.log(name, age)
// let date = Date('2020-12-01')
// console.log(date)





/**
 * Operadores unários
 * typeof
 * delete
 */
// const person = {
//     name: 'Mayk',
//     age: 25,
// }
// delete person.age
// console.log(person)




/**
 * Operadores Aritiméticos
  */
  
  //multiplicação *
 // console.log(3.2 * 5.5)
 // //divisão /
 // console.log(12 / 2)
  //soma +
 // console.log(2 + 2)
  //subtração -
 // console.log(34 - 23)

  
  
  //resto da divisão
  //let remainder

  //remainder = 11 % 3
  //console.log(remainder)
  //incremento
  //let increment = 0
 // increment++ //adiciona
 // console.log(increment)
  //decremento
  //increment--  //retira
  //console.log(increment)
 // exponencial  **
 //console.log(3** 2)



 //Grouping operator()
 //ordem de precedencia

// let total = "Alo alo" + " você"
// console.log(total)
//  let total = (2 + 3) * 5
// console.log(total)






//Operadores de comparação

// Irá comparar valores e retornar um Boolean como respota à comparação

// let one = 1
// let two = 2

//==          igual a 
// console.log( two == 1)
// console.log( one == "1")

// !=  diferente de
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// === estritamente igual a 
// console.log( one === "1")
// console.log( one === 1)

// !== estritamente diferente de 
// console.log( two !== "2")
// console.log( two !== 2)






//Operadores de atribuição (Assignment)
 //let x
 // assignment
 //x = 1
 //console.log(x)
// addition assignment
// x += 2
// x = x + 2
//x += 2
//console.log(x)

//subtraction assignment
// x -= 1
//x -= 1
//console.log(x)

//multiplication assignment
// x *= 2
//x *= 2
//console.log(x)

// division assignment
// x /= 2
//x /= 2
//console.log(x)

// remainder, exponetiation
// x %= 2
//x %= 2
//console.log(x)
// x **= 2
//x **= 2
//console.log(x)





// Operadores lógicos (logical operators)

// -2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

//let pao = false
//let queijo = true

//AND &&
//console.log(pao && queijo)
// OR ||
//console.log(pao || queijo)
// NOT!
//console.log(!pao)





//Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
//condition ? value1 : value2

//Exemplos

// Café da manhã top
// let pao = true
// let queijo = false

// const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
// console.log(niceBreakfast)

// const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
// console.log(niceBreakfast)

//Maior de 18
// let age = 18
// const canDrive = age >= 18 ? 'can drive' : "cant't drive"

// console.log(canDrive)








//Operador de String (String operator)

//comparison (comparação)
// console.log('a' == 'a')
//concatenation (concatenação)
//Retorna a união de duas Strings
//console.log('a' + 'a')
// let alpha = 'alpha'
// alpha += 'bet'
// console.log(alpha)



/**
 * Type conversion (typecasting) vs Type coersion
 */

// console.log(Number('9') + 5)

/**
 * FALSY
 * Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops)
 * 
 * false
 * 0
 * -0
 * ""
 * null
 * undefined
 * NaN
 */
// console.log( 0 ? 'verdadeiro' : 'falso')


/**
 * TRUTHY
 * Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops)
 * 
 * true
 * {}
 * []
 * 1
 * 3.23
 * "0"
 * "false"
 * -1
 * Infinity
 * -Infinity
*/

// console.log({} ? 'verdadeiro' : 'falso')






/**
 * Operador precedence
 * Precedência de operadores
 * 
 * grouping                         ()
 * negação e incremento             ! ++ ==
 * multiplicação e divisão          * /
 * adição e subtração               +-
 * relacional                       < <= > >=c
 * igualdade                        == != === !==
 * AND                              &&
 * OR                               ||
 * condicional                       ?:
 * assignment (atribuição)           = += -= *=   
 */

console.log( 2 + 5 * 10)
