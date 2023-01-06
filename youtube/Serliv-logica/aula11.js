
let produtos = new Array('caneta', 'lapis', 'tesoura', 'borracha', 'caderno', 'livro');

produtos.push('compasso', 'cartolina')

let output = document.querySelector('#output');


let msg = '';

for (let i = 0; i < produtos.length; i++) {
    msg += 'produto ' + (i + 1) + ': ' + produtos[i] + ' <br>';

}

output.innerHTML = msg;

document.write('<h1>Dias da semana</h1>')


let dias = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado');

let hoje = new Date();

let diaSemana = hoje.getDay(); //retorna o dia da semana

alert('Bem vindo, hoje é ' + diaSemana)