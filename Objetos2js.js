
//Rastreador de Hábitos

//1. Modele um sistema de rastreamento de hábitos diários usando objetos.
//2. Cada hábito pode ser representado por um objeto com propriedades como nome, frequência (diário, semanal, etc.) e progresso.


//habito e informações sobre ele
let habito1 = {
    nome: "WakeUpEarly", 
    frequencia: "Daily", 
    progresso: ""
};

//metodo que atualiza o progresso do habito
habito1.itsFinished = function(){
    this.progresso = "Finished";
};

//habito e informações sobre ele
let habito2 = {
    nome: "DevPratice", 
    frequencia: "Daily", 
    progresso: ""
};

//metodo que atualiza o progresso do habito
habito2.WorkingThat = function(){
    this.progresso = "Working that";
};

//habito e informações sobre ele
let habito3 = {
    nome: "Park", 
    frequencia: "Weekly", 
    progresso: ""
};

//metodo que atualiza o progresso do habito
habito3.NoStarted = function(){
    this.progresso = "No started";
}



habito1.itsFinished();
habito2.WorkingThat();
habito3.NoStarted();

console.log(habito1, habito2, habito3);