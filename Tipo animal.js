/*Crie um programa que recebe o nome de um animal 
e usa switch para determinar o tipo de animal (mamífero, réptil, pássaro, etc.).
*/

function tipoDeAnimal (animal){
    switch(animal){

        case "Leão":
        console.log("O leão é um mamífero");
        break;

        case "Baleia":
        console.log("A Baleia é um mamífero");
        break;

        case "Lagarto":
        console.log("O Lagarto é um réptil");
        break;

        case "Arara":
        console.log("A Arara é um pássaro");
        break;

        case "Papagaio":
        console.log("O Papagaio é um pássaro");
        break;

        default:
        console.log("Desculpe, algo deu errado");

    }
}

tipoDeAnimal("Arara");