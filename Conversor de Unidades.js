/*
Conversor de Unidades:

Implemente um conversor de unidades simples.
Peça ao usuário para escolher entre converter quilômetros para milhas ou metros para quilômetros usando switch.
*/

function conversor(unidade, valor) {
    switch (unidade) {
        case 1:
            console.log(valor * 0.621371); // Converter quilômetros para milhas
            break;

        case 2:
            console.log(valor / 1000); // Converter metros para quilômetros
            break;

        default:
            console.log("Opção inválida");
    }
}

conversor(2, 100);
