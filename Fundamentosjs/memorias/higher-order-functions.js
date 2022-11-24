const usuarioLogin = (pessoa) => {
    let array = []
    for (i = 0; i < 900000; i++) {
        array.push(i)
    }

    return `${pessoa} logou com sucesso no sistema`
}

console.log(usuarioLogin("Luke"))