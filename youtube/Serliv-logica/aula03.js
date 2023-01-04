// Operadores de Comparação


// == Igualdade (valor)
// != Diferente (valor)
// ===Igualdade(valor e tipo)
// !==Diferente(valor e tipo)
// >  Maior
// >= Maior ou Igual
// <= menor ou igual

// O operador "=" não é operador de comparação, e sim de atribuição



//CONDICIONAIS

// Pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não.
// A nota de corte é 5

let n1 = prompt('Digite um número');

n1 = parseFloat(n1);

let n2 = parseFloat(prompt('Digite outro número'));

let media = (n1 + n2)/2;

alert(media > 5);

if(media > 5){
    //bloco verdade
    alert("Parabéns! Você foi aprovado")
} else {
    //bloco mentira

    alert("Desculpe mas não foi dessa vez")
}





