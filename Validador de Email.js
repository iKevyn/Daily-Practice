/*
Crie uma função chamada validarEmail que recebe uma string como parâmetro e verifica se ela representa um e-mail válido. 
A função deve retornar verdadeiro se o e-mail for válido e falso caso contrário.
*/

function validarEmail (mail){
    if (mail.includes("@")) 
    console.log(true);
     else {
        console.log(false);
    }
}

validarEmail("npcmail.com");