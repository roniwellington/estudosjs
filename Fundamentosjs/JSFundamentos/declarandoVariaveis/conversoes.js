//tipo de dado

//booleanos

//conversão implícita

const numero = 456;
const numeroString = Number("456a");
//Number()
//String()
console.log(numero + numeroString)

//conversão explícita

//Conversão de valores

//String()

let telefone = 123456789;
console.log("O telefone é " + String(telefone));//teremos a conversão do número 123456789 para uma string "123456789" e assim poderemos fazer a concatenação entre as strings

//Outra opção com o .toString

let telefoneDois = 123465789;
console.log("O telefone é " + telefoneDois.toString());// o .toString() é outra forma para fazer essa conversão, que é mais parecida com outras linguagens de programação

let usuarioConectado = false;
console.log(String(usuarioConectado));//conversão da booleana para string, nesse caso teremos uma string false

usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string true

//Number() CONVERSÃO DE TEXTO E BOOLEANOS ATRAVÉS DE NUMBER()

let largura = "10";
let altura = "5";

console.log(Number(largura) * Number(altura)); //conversão de string para números, possibilitando a realização da multiplicação

//conversões com o operador de +
let larguraUm = "10";
let alturaDois = "5";

console.log(+ larguraUm * + alturaDois); //teremos a conversão de String para números realizados usando o + antes das variáveis
let meuNome = "Leonardo";
console.log(Number(meuNome))//NaN
console.log(+ meuNome);//NaN

let usuarioConectadoDois = false;
console.log(Number(usuarioConectadoDois));//teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectadoDois = true;
console.log(Number(usuarioConectadoDois))//agora teremos a conversão de true (verdadeiro) para o número 1

//palavras reservadas
// arguments
// as
// async
// await
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// eval
// export
// extends
// false
// finally
// for
// from
// function
// get
// if
// import
// in
// instanceof
// let
// of
// new
// null
// return
// set
// static
// super
// switch
// target
// this
// throw
// true
// try
// typeof
// var
// void
// while
// with
// yield

// enum
// implements
// interface
// package
// private
// protected
// public