
//Agenda de Reuniões

//1. Crie um array de objetos representando reuniões agendadas.
//2. Inclua informações como data, hora, local e participantes.
//3. Desenvolva uma função que filtra as reuniões do dia.

//informacoes e detalhes de cada reuniao
let meet1 = {
    data: "8/1",
    hora: "1:00 PM",
    participantes: "Anakin e Kenobi",
};

let meet2 = {
    data: "8/1",
    hora: "4:00 PM",
    participantes: "Anakin, Kenobi e the Concil",  
};

let meet3 = {
    data: "10/2",
    hora: "1:00 PM",
    participantes: "Anakin e Palpatine",   
};

//reunindo todas as reunioes em um lugar só
const allMeets = [meet1, meet2, meet3]

//funcao para filtrar reunioes por data
function filtrarPorData(data){
    return allMeets.filter(meet => meet.data === data);
};

//usando funcao para filtrar as reunioes do dia 8/1
const reunioesDia8_1 = filtrarPorData("8/1")

console.log(reunioesDia8_1);