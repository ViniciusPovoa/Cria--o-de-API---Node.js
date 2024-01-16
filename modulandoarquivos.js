
//FILE SYSTEM
const fs = require("fs")


//JSON PARSE TRANSFORMA EM JSON
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = {id: "3", nome: "Livro3"}


//stringify transforma o arquivo em um texto
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(dadosAtuais)