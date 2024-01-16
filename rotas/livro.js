

const { Router } = require("express") // CRIACAO DE ROTAS
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()


// REQ = REQUISICAO
// RES = RESPONSE

router.get('/', getLivros)

router.get('/:id', getLivro) // PEGANDO O GET POR ID

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)



module.exports = router // MESMA COISA DO EXPORT DEFAULT