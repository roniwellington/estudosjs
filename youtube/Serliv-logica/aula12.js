//mostrar na tela a soma dos números pares da array abaixo

let numeros = new Array(1, 2, 3, 5, 2);

//mostrar na tela  a soma dos números pares array acima

somaOsPares(numeros)

function somaOsPares(arr) {

    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        console.log(arr[i]);

        if (!isNaN(arr[i]) && arr[i] % 2 === 0) {
            soma += arr[i];
        }
    }
    alert('A soma dos numeros pares é ' + soma);
}
