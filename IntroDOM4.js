//1. Acessando Elementos

// Obtenha o elemento com id "header".
// Mude o texto desse elemento para "Novo Título".
let renameHeader = document.getElementById("header");
renameHeader.innerHTML = "Novo Titulo";

//2.Crie um novo parágrafo (<p>) com o texto "Este é um novo parágrafo" e adicione-o como filho do elemento com id "content".

let novoParagrafo = document.createElement("p");
novoParagrafo.innerHTML = "Este é um novo parágrafo";
document.getElementById("content").appendChild(novoParagrafo);