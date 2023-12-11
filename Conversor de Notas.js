/*
Crie um programa que recebe uma nota em formato de letra (A, B, C, D, F)
e converte para um conceito usando switch (por exemplo, A para "Excelente", B para "Bom", etc.).
*/

function converterNota (nota){
    switch(nota) {

        case "A":
            console.log("Muito Bom");
            break;

        case "B":
            console.log("Bom");
            break;

        case "C":
            console.log("Média");
            break;

        case "D":
            console.log("Ruim");
            break;

        case "E":
            console.log("Muito Ruim");
            break;

        default:
        console.log("Desculpe, algo está errado.")
    }
}

converterNota("Z");