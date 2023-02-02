function adicionarFilme(){
    var filmeFavorito = document.getElementById('filme').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');
    document.write('<img src=' + filmeFavorito + '>');
    elementoListaFilmes.innerHTML = filmeFavorito
}