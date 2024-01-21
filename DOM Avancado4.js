/* 
1. Crie um campo de entrada de texto para adicionar novas tarefas.
2. Adicione um botão para adicionar a tarefa à lista.
3. Exiba as tarefas em uma lista na página.
 */

// Criação de um campo de entrada de texto para adicionar novas tarefas.
let campoTexto = document.createElement("input");  // Cria um novo elemento de entrada de texto.
campoTexto.placeholder = "Adicionar";  // Define o texto do placeholder.
document.body.appendChild(campoTexto);  // Adiciona o campo de texto ao corpo do documento.

// Adição de um botão para adicionar a tarefa à lista.
let botaoAdicionarTarefa = document.createElement("button");  // Cria um novo botão.
botaoAdicionarTarefa.innerText = "Adicionar tarefa";  // Define o texto do botão.
document.body.appendChild(botaoAdicionarTarefa);  // Adiciona o botão ao corpo do documento.

// Criação de uma lista para exibir as tarefas.
let listaTarefas = document.createElement("ul");  // Cria uma nova lista.
document.body.appendChild(listaTarefas);  // Adiciona a lista ao corpo do documento.

// Função para adicionar tarefa à lista.
botaoAdicionarTarefa.addEventListener("click", function(){
    let tarefa = document.createElement("li");  // Cria um novo item de lista.
    tarefa.innerText = campoTexto.value;  // Define o texto do item da lista como o valor do campo de texto.
    listaTarefas.appendChild(tarefa);  // Adiciona o item da lista à lista de tarefas.
    campoTexto.value = "";  // Limpa o campo de texto.
});