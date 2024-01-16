

const { Router } = require("express") // CRIACAO DE ROTAS
const { getFavoritos, postFavorito, deleteFavorito } = require("../controladores/favorito")


const router = Router()


// REQ = REQUISICAO
// RES = RESPONSE

router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavorito)



module.exports = router