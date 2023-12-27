/*
Crie uma função chamada calcularGorjeta que recebe o valor da conta de um restaurante e a porcentagem de gorjeta desejada. 
A função deve calcular e retornar o valor da gorjeta. 
Por exemplo, se a conta for R$ 100 e a gorjeta desejada for 15%, a função deve retornar R$ 15.
*/

function calcularGorjeta(valorDaCompra, porcentagem){
    resultado = valorDaCompra * porcentagem;

    console.log(resultado);
}


calcularGorjeta(100, 0.15);