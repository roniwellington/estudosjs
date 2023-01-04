// let n1 = prompt('Digite um número');

// n1 = parseFloat(n1);

// let n2 = parseFloat(prompt('Digite outro número'));

// let media = (n1 + n2) / 2;


// if (n1 === 0 || n2 === 0 || media <= 5) {
//     //bloco verdade
//     alert("Desculpe mas não foi dessa vez")
// } else {
//     //bloco mentira
//     alert("Parabéns! Você foi aprovado")

// }


let n = prompt("Digite um numero");
n = parseInt(n);

switch(n){
    case 1:
        alert('boa escolha');
        break;
    case 2:
        alert('legal');
        break;
    case 3:
        alert('caramba');
        break;
    default:
        alert('escolha de 1 a 3');
}

