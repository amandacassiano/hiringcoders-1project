//Se for sim, mostra as categorias, e pergunta qual categoria escolhe.
//se escolher nao, mostra todos os livros em ordem crescente pela quantidade de paginas.

const livros = require("./database");
console.log(livros)

livros
//pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log ('Essas são as categorias disponíveis:')
    console.log ('Romance', 'Terror', 'Aventura', 'Drama')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log ("Esses são todos os livros disponíveis.")
    console.table(livrosOrdenados)
}
