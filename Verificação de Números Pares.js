/*
Peça ao usuário para inserir um número.
Verifique se o número é par ou ímpar e imprima a mensagem apropriada.
*/

function parOunao(número){
    if (número % 2 === 0) {
        console.log("É par")
    } else {
        console.log("É impar")
    }        

}

parOunao(2);