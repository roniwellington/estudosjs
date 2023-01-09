let produto1 = new Object();
produto1.nome = "caneta";
produto1.preco = 2.2;
produto1.estoque = 10;


produto1.comprar = function(qtd){
    if(!qtd){
        qtd = 1;
    }
    console.log('comprou caneta');
    // this.estoque--;
    this.estoque = this.estoque - qtd;
    console.log(this.estoque)
}

let msg = '';

 msg += 'nome: ' + produto1.nome + '<br>';
 msg += 'preco' + produto1.preco + '<br>'
 msg += 'estoque' + produto1.estoque + '<br>'


 document.querySelector('#output').innerHTML = msg;