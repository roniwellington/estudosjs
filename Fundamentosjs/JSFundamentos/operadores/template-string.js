const nome = "Ju"
const idade = 2021-1981;
const cidadeDeNascimento = "São Paulo"
const bebidaMaior = "cerveja";
const bebidaMenor = "suco"

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " eu nasce em " + cidadeDeNascimento;

const apresentacao =  ` meu nome é ${nome}, minha idade ${idade} e eu nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)