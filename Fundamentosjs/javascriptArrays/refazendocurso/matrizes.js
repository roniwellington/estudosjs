const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade]

console.log(`Lista de nomes ${funcionarios[0][1] } está na faculdade aos ${funcionarios[1][2]} e tá tudo bem, obrigado`)