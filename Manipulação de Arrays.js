/*
Adicione um novo número ao final do array numeros.
Remova o segundo número do array.
Itere sobre o array e imprima cada número.
*/

let numeros = [7, 12, 30, 17, 21];

/* Adicione um novo número ao final do array numeros.*/
numeros.push(8);

/* Remova o segundo número do array.*/
numeros.splice(1, 1);

/*Itere sobre o array e imprima cada número.*/
for (let numero of numeros) {
    console.log(numero);
}