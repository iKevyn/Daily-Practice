//1. Ao clicar no botao o texto é alterado

// Certificando-se de que script é executado após a renderização da página
document.addEventListener("DOMContentLoaded", function(){

// Selecionando os elementos
let titulo = document.getElementById("titulo");
let botao = document.getElementById("botao");

// Adicionando um ouvinte de evento ao botao, ao ser clicado altera o titulo.
botao.addEventListener("click", function(){
    titulo.innerHTML = "Sayonara World";
  });
});