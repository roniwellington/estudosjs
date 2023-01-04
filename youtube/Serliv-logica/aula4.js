/**Exercicio */

//fazer jogador1 digitar um numero
let nJogador1 = prompt('numero do jogador 1');
nJogador1 = parseInt(nJogador1);

//fazer jogador2 digitar outro numero
let nJogador2 = prompt('numero do jogador 2');
nJogador2 = parseInt(nJogador2);

//se forem iguais, mostrar mensagem 'empate'
if (nJogador1 === nJogador2) {
    alert('voces empataram');
} else {
    //sortear um numero entre 0 e 1
    let nSorteado = parseInt(Math.random() * 2);

    //se o numero sorteado for 0, ganha quem escolher o numero MENOR
    if (nSorteado === 0) {

        if (nJogador1 < nJogador2) {

            alert('ganhou o jogador 1');

        } else {
            alert('ganhou o jogador 2');
        }

        //se o numero sorteado for 1, ganha quem escolher O numero MAIOR
    } else {
        if (nJogador1 > nJogador2) {
            alert('ganhou o jogador 1');
        } else {
            alert('ganhou o jogador 2');
        }
    }

}