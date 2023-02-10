Síncrono vs Assíncronos

O que é síncrono vs assíncrono no JavaScript?
Qual é o fluxo natural de execução do JavaScript?
O que é uma callback function?
A função setTimeout()


SÍNCRONO

Sistema síncrono (synchronous), uma tareaf é concluída após a outra.
No exemplo abaixo vemos uma imagem terminar de carregar, para então, carregar a outra.
A tarefa anterior precisa ser concluída, para então iniciar a próxima
Port padrão, o JavaScript pe um sistema síncrono

Assíncrono
Num sistema assíncrono (asynchronous), tarefas são executadas de maneira independente uma da outra.

Perceba na imagem abaixo que todas as imagens estão sendo carregadas de maneira independente.
O JavaScript poderá usar o assincronismo ao seu favor.


PROMISE
A promessa de que algo irá acontecer no futuro!

É um objeto JavaScript com a promessa de que algo será realizado
É usado para operações assíncronas
    Carregar um arquivo
    Leitura de dados de uma API

Uma promessa poderá ser:
    Pending: Estado inicial, assim que o Objeto da promessa
    é iniciado
    Fulfilled:A Promessa foi concluída com sucesso
    Rejected: A promessa foi rejeitada, house um erro
    Settled: Seja com sucesso ou com erro, ela foi finalmente concluída


Async/Await

-Maneira de escrever promises
-Syntactic Sugar