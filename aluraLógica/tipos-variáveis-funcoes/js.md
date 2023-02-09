Nesta aula vimos:
*Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números texto e booleanos.

* Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante.

*Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos como verdadeiro (true) ou falso(false).

* Onde as booleanas mais aparecem, como resultados de comparações com === ou outros operadores de comparação como >=.




Nesta aula vimos que:
var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.

let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.

O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).

null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.

O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.

Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.

O que é o JavavScript?

*tipagem dinâmica

*Multiparadigma

*Por que se chama JS?

*O que é ES6/ES2015?

*Linguagem interpretada



O que aprendemos
Nesta aula vimos:
As características principais do JavaScript, como ser uma linguagem interpretada e dinamicamente tipada.

O que  NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mais sim no servidor

Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando. 

O que é stacktrace, também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.

O que é o Console API e como podemos utilizá-lo usando o console.log() e console.error().

Onde as mensagem do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal


O que aprendemos:
Nesta aula vimos:

A diferença entre fazer comparações com ==, em que JavaScript faz conversão entre os tipos de variável deve ser o mesmo.

Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um ?, seguido da possibilidade true, um : e a possibilidade false, ou seja
comparação ? true : false.

O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado.

O uso da template literal, que facilita a construção de strings que demandam concatenação (a operação em que se junta 2 strings), e foi introduzido no ES6.

Como usar a template literal, escrevendo o texto entre acentos graves (`) e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição.



