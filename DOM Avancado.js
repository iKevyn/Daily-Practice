
//1. Crie um botão com um ID específico no seu HTML.
//2. Adicione um script JavaScript ao seu arquivo.
//3. No script, adicione um listener de evento ao botão.
/*4. Quando o botão for clicado, a função do listener deve criar dinamicamente um novo título (por exemplo, `<h2>`) 
com um conteúdo personalizado e adicioná-lo à página.*/


// Selecionar o botão pelo seu id
let criarTitulo =  document.getElementById("botaoCriadorTitulo");

// Adicionar um ouvinte de eventos para o evento de clique
criarTitulo.addEventListener("click", function(){

      // Criar um elemento h2
    let titulo = document.createElement("h2");

      // Definir o conteúdo do título
    titulo.textContent = "Criado com DOM";

      // Adicionar o título ao documento, dentro do body
      document.body.appendChild(titulo);
})