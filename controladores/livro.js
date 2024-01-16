
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarLivroPorId } = require('../servicos/livro');


function getLivro(req, res){
    try{
        const id = req.params.id 
        if(id && Number(id)){
            //Number(2) -> 2
            // Number("batata") -> Nan -> false
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id inválido!")
        }

    
        } catch (error){
        res.status(500)
        res.send('error: ' + error.message)
        }
    }

function getLivros (req, res) {
        try{
        const livros = getTodosLivros()
        res.send(livros)
    
        } catch (error){
        res.status(500)
        res.send('error: ' + error.message)
        }
    }

function postLivro (req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        }else {
            res.status(422)
            res.send("Campo nome é obrigatório!")
        }

    } catch(error){
        res.status(500)
        res.send('error: ' + error.message)
    }
}


function patchLivro (req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body
            modificaLivro(body, id)
            res.send("Livro modificado!")

        }else {
            res.status(422)
            res.send("Id inválido")
        }



    } catch(error){
        res.status(500)
        res.send('error: ' + error.message)
    }


}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)){
            deletarLivroPorId(id)
            res.send("livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

    
module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}
