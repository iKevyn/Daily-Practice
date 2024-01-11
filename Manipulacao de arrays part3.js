/*
Crie um array de objetos representando livros, cada um com propriedades como título, autor e ano de publicação.
Ordene o array de livros por ano de publicação, do mais antigo para o mais recente.
*/

let livros = [
    { titulo: "Livro A", autor: "Autor A", anoPublicacao: 2009},
    { titulo: "Livro B", autor: "Autor B", anoPublicacao: 2002},
    { titulo: "Livro C", autor: "Autor C", anoPublicacao: 2004},
]

// Utilizando a função sort para ordenar os livros por ano de publicação
livros.sort(function(a, b) {
    return a.anoPublicacao - b.anoPublicacao;
});

// Exibindo o array de livros ordenado
console.log(livros);