var numeroSecreto = parseInt(Math.random() * 1001);
//var numeroSecreto = 10;



while (chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 0 e 1000')

    if (chute == numeroSecreto) {
        alert("Você acertou!")
    } else if (chute > numeroSecreto) {
        alert('Errou... o número secreto é menor')
    } else if (chute < numeroSecreto) {
        alert('Errou... o número secreto é maior')
    }
}


console.log(numeroSecreto)