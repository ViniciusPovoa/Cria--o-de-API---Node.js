const fs = require('fs')

const livros = JSON.parse(fs.readFileSync("livros.json"))

function getTodosLivros(){
    return livros
}



function getLivroPorId(id){
    const livroFiltrado = livros.filter( livro => livro.id === id)[0] // O FILTRO DE LIVROS VAI PASSAR A SER FILTRADO POR ID PASSADO 
                                                                    // SE FOR FALSO, ELE TIRA DA LISTA, SE FOR VDD ELE COLOCA NA NOVA LISTA
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const novaListaDeLivros = [...livros, livroNovo]  // adiciona o livroNovo na lista de livros existente

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {

    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

    const indiceModificado = livrosAtuais.findIndex( livro => livro.id === id) // vai descobrir qual é o index onde o id for igual ao id do parametro

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}


function deletarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}





module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivroPorId
}


