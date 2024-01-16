const fs = require('fs')

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id){
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id) // VERIFICA SE O ID ESSA LISTA É IGUAL AO ID QUE RECEBEU NA FUNCAO
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));

}

function insereFavorito(id){
    const livros = JSON.parse(fs.readFileSync("livros.json")) // tem acesso ao total de livros
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find( livro => livro.id === id)  //encontra elementos dentro de uma lista
    const novaListaDeFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos));


}




module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}
