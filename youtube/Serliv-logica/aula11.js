
let produtos = new Array('caneta',  'lapis', 'tesoura', 'borracha', 'caderno', 'livro');

produtos.push('compasso', 'cartolina')

let output = document.querySelector('#output');


let msg = '';

for (let i = 0; i < produtos.length; i++) {
    msg += 'produto ' + (i + 1)  + ': ' +  produtos[i] + ' <br>';
    
}

output.innerHTML = msg ;