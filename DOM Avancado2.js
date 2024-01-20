/*
1. Crie um elemento (por exemplo, uma div) com um ID específico no seu HTML.
2. Adicione um script JavaScript ao seu arquivo.
3. No script, adicione um listener de evento para o evento "mouseover" ao elemento.
4. Quando o mouse passar sobre o elemento, a função do listener deve modificar dinamicamente a cor de fundo do elemento.
*/

//Criando variavel que armazena o botao
let botao1 = document.getElementById("botao1");

//Adicionando um ouvinte de eventos e a função seguinte
botao1.addEventListener("mouseover", function(event){

    //acessando e alterando a cor que sera exibida ao passar o mouse sobre o elemento
    event.target.style.backgroundColor = "lightgreen";
} );