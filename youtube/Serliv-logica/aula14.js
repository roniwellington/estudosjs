let produtos = [
    {"nome": "caneta", "preco":2}, 
    {"nome": "lapis", "preco":1.2},
    {"nome": "borracha", "preco":0.5}
];
 let msg = "";

for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i]);

    msg += "<h2>Produto: " + produtos[i].nome+ "</h2>"
    msg += "<p>preco: R$ " + produtos[i].preco + "</p>"
}

  document.querySelector('#output').innerHTML = msg;