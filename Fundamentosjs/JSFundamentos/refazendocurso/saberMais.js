function ganhoPorHora(salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);

    const formatado = salarioHora.toLocaleString('pt-BR', {style:'currency', currency: 'BRL' })

    return formatado
}

console.log(ganhoPorHora(1400,176));