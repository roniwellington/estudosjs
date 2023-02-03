//Manipulando Strings e Números

//Transformar String em Número e Número em String

// let string = '123';
// console.log(Number(string))
// let number = 321
// console.log(String(number))

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

// let word = "Paralelepipedo"
// console.log(word.length)
// let number = 1324
// console.log(String(number).length)


//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// let number = 123.123456
// console.log(number.toFixed(2).replace(".", ","))




//Transformando letras minúsculas em maiúsculas. Faça o contrário disso também

// let word = "Programar é demais!"
// console.log(word.toLocaleUpperCase())
// console.log(word.toLocaleLowerCase())

//separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _(underline)

// let phrase = " Eu quero viver o Amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore)



//Manipulando String

// Verificar se o texto contém a palavra Amor

// let phrase = "Eu quero viver o amor!"

// console.log(phrase.includes("Amor"))



//Manipulando Arrays

//Criar Array com construtor
// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)


//Contar elementos de um array
// console.log(['a', 'b', 'c'].length)

//Manipulando Arrays

// Transformar uma cadeia de caracteres em elementos de um array

// let word = 'manipulação'
// console.log(Array.from(word))






//Manipulando Arrays

let techs = ["html", "css", "js",]

//adicionar um item no fim
console.log(techs.push("nodejs"))
//adicionar no começo
techs.unshift('sql')
// remover do fim
/*techs.pop()*/
// remover do começo
/*techs.shift()*/
// pegar somente alguns elementos do array
/*console.log(techs.slice(1, 3))*/
// remover 1 ou mais items em qualquer posição do array
/*techs.splice(1,1)*/
// encontrar a posição de um elemento do array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(index)