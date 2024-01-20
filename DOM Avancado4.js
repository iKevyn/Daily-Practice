/* 1. Crie um campo de entrada de texto para adicionar novas tarefas.
2. Adicione um botão para adicionar a tarefa à lista.
3. Exiba as tarefas em uma lista na página.
4. Adicione um botão ou uma checkbox junto a cada tarefa para marcar como concluída.
5. Adicione um botão para remover tarefas concluídas. */

// / Criacao de um campo de entrada de texto para adicionar novas tarefas.
let campoText = document.createElement("input");
campoText.placeholder = "Adicionar";
document.body.appendChild(campoText);


//  Adicao de um botão para adicionar a tarefa à lista.
let botaoAdicionarTarefa = document.createElement("button");
botaoAdicionarTarefa.value = "Adicionar tarefa";
botaoAdicionarTarefa.innerText = "Adicionar tarefa"
document.body.appendChild(botaoAdicionarTarefa);

//  Exibição das tarefas em uma lista na página.