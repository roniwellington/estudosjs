//tipo de dado
// booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";


//Number()
//String()
console.log(numero + Number(numeroString))


// conversão explícita

//String
// let telefone = 123456789;
// console.log("O telefone é " + String(telefone));

let telefone = 123456789;
console.log("O telefone é " + telefone.toString())//o .toString() é uma outra forma para fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado))// teremos a conversão da booleana para string, nesse caso teremos uma string "false"
usuarioConectado = true;
console.log(String(usuarioConectado));//agora teremos uma string "true"

//Number()

// vamos calcular a área de uma retângulo
let largura = "10";
let altura = "5";
 console.log(Number(largura) * Number(altura)); // teremos a conversão de string para números, possibilitando a realização da multiplicação

 // + para conversão de texto para números

console.log(+ largura * + altura)// teremos a conversão de String para números realizado usando + antes das variáveis.

let meuNome = "Leonardo";
console.log(Number(meuNome));// como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número)
console.log(+ meuNome); // a conversão também retornará NaN

usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true(verdadeiro) para o número 1.