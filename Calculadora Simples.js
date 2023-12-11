/*
Crie uma calculadora simples que realiza operações básicas.
Peça ao usuário para inserir dois números e a operação desejada. Use if-else para determinar a operação a ser realizada.
*/

function calculadora(numero1, operação, numero2){
    let resultado;

    if (operação === "soma") {
        resultado = numero1 + numero2;
    } else if (operação === "subtracao") {
            resultado = numero1 - numero2;
        } else {
            console.log("Operação inválida");
        }
        console.log(resultado)
    }

calculadora(1, "subtracao", 2);