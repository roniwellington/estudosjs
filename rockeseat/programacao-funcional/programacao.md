OBJETIVO

Apresentação do Paradigma

Conceitos Fundamentais

JavaScript

por que JavaScript como linguagem para este curso?

Linguagem da WEB

Multiparadigma

Foco no entendimento do Paradigma


Por que programação funcional?

Organizar uma linha de raciocínio
Entender uma nova maneira de abordar os problemas
Algumas tecnologias tem como requisitos


FUNÇÕES

Pequenas tarefas dentro de uma função

Abstrair um problema e isolar ele dentro da função

Não modificar dados fora dela

Pequenas e bem específicas no que fazem.


CARACTERÍSTICAS PRINCIPAIS DA FUNÇÃO

Um dado (ou mais) entra em uma função e um novo dado sai dessa função

Não altera dados

Não guarda estado stateless

Linguagens funcionais

JavaScript(multiparadigma)
PHP (multiparadigma)
Elixir
Haskell


PONTOS POSITIVOS

Fácil manutenção
fácil uso de testes
    funções isoladas e consistentes
Código mais confiáveis


PRINCÍPIOS

PARADIGMAS

Programação Imperativa
Programação Declarativa


Dados

Imutalibidade
Stateless

Funções
Independentes
Puras
Higher=order
Firsts-class
Composição

Programação
Imperativa e Declarativa


PROGRAMAÇÃO IMPERATIVA

O código é pensado e gerado em sequência.

O código é pensado como um passo-a-passo, como uma receita
de bolo

Uma coisa depende da outra

O estado de um dado é alterado constantemente causando mutações nas variáveis

Orientação a Objetos é um tipo de paradigma imperativo


PROGRAMAÇÃO DECLARATIVA

O código é gerado para fazer algo, não importa como

O que fazer e não como fazer

Não há necessidade de um passo a passo no código

Programação funcional pe um tipo de paradigma declarativo


IMUTABILIDADE

Uma variável não vai variar
Se você precisar mudar uma variável, você não muda, você cria uma nova



STATELESS

Não guarda estado
A função só conhece dados entregues a ela
A resposta não poderá variar


FUNÇÕES 
Vamos conhecer algumas características das funções na programação funcional

Funções Independentes

Funções Puras

First-class Functions

Higher-order Functions

Composição de Funções

FUNÇÕES INDEPENDENTES

Deverá ter ao menos 1 argumento

Deverá retornar algo

Nada que acontecer lá dentro afeta o mundo externo
    dados imutáveis
    não guardar estado

Não faremos uso de loops(for, while), mas se houver necessidade de tal, usaremos recursão( a função chama ela mesma)



FUNÇÕES PURAS

Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento

Não deverá sofrer nenhuma interferência do mundo externo a ela

Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente

Não terá nenhum efeito colateral no seu código
    Não irá modificar nenhum dado
    Não irá guardar nenhum estado




FIRST-CLASS FUNCTION

Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções

A função poderá ser entendida como uma variável



HIGHER-ORDER FUNCTION

Funções que recebem funções como argumentos

Funções que poderão retornar outras funções


COMPOSIÇÃO DE FUNÇÕES

Um encadeamento de funções

Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna



CONCLUSÃO

Paradigma de programação
linguagens
Conceitos fundamentais
    Stateless, Imutabilidade, Função pura, Higher-orders



