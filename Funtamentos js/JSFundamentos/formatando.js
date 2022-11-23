function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = (salario / horasTrabalhadasNoMes);

    return Math.round(salarioHora);
}

console.log(ganhoPorHora(3000, 176))