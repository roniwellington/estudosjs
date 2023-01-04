// Operadoreslógicos

// pedir para o usuario digitar dois números e mostrar uma mensagem informando se foi aprovado ou não.A nota de corte é 5.
// Contudo, se qualquer uma das notas for zero, reprova automaticamemte
let n1 = prompt('Digite um número');

n1 = parseFloat(n1);

let n2 = parseFloat(prompt('Digite outro número'));

let media = (n1 + n2)/2;


if(media > 5 && n1 > 0 && n2 > 0){
    //bloco verdade
    alert("Parabéns! Você foi aprovado")
} else {
    //bloco mentira

    alert("Desculpe mas não foi dessa vez")
}
