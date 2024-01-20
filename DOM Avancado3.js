/*
1. Crie vários elementos (por exemplo, divs) com IDs específicos no seu HTML.
2. Adicione um botão com um ID específico no seu HTML.
3. Adicione um script JavaScript ao seu arquivo.
4. No script, adicione um listener de evento ao botão.
5. Quando o botão for clicado, a função do listener deve remover um elemento específico da página
*/

//Adicionando o botao e o titulo em variaveis
let botao = document.getElementById("Botao");
let titulo = document.getElementById("Titulo");

botao. addEventListener("click", () => document.body.removeChild(titulo));