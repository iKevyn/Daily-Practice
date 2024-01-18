// Certifique-se de que o script é executado após a renderização da página
document.addEventListener("DOMContentLoaded", function() {
    // Selecione o botão e o parágrafo
    let botao = document.getElementById("botao");
    let paragrafo = document.getElementById("paragrafo");

    // Adicione um evento de clique ao botão
    botao.addEventListener("click", function() {
        // Altere o texto do parágrafo ao clicar no botão
        paragrafo.textContent = "Hi Moon";
    });
});