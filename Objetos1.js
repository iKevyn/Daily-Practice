//Gerenciador de Tarefas Diárias (Objetos)//

//Crie um objeto para representar uma tarefa diária.
//Inclua propriedades como título, descrição e status (concluída ou não).
//Desenvolva métodos para marcar uma tarefa como concluída e exibir informações sobre a tarefa.


//1. Crie um objeto para representar uma tarefa diária.
//2. Inclua propriedades como título, descrição e status (concluída ou não).

let taskList = {
    titulo: "Dev Study",
    descrição: "Learn about frameworks",
    status:"",
};

//3. Desenvolva métodos para marcar uma tarefa como concluída e exibir informações sobre a tarefa.

taskList.ItsFinished = function(){
    this.status = "Finished"
};

taskList.ItsFinished();
console.log(taskList)