/*
Crie um objeto que represente um contato na agenda, com propriedades como nome, número de telefone e e-mail.
Adicione um método que exiba todas as informações do contato de forma formatada.
*/


/*Aqui realizei o pedido do exercicio*/

let agenda = {
    nome: "Anakin",
    numeroTelefone: 646466464,
    email: "lordvader@mail.com",
    Infos:function(){
        return `Nome: ${this.nome} Número: ${this.numeroTelefone} email: ${this.email}`;
    }
}

/*Aqui resolvi imprementar um pedido seletivo, sendo assim é possivel escolher exibir todas as informações ou uma especifica*/

function ver(info){
    if (info === "nome") {
        console.log(agenda.nome);
    } else if (info === "telefone") {
        console.log(agenda.numeroTelefone);
    } else {
        (info === "email")
        console.log(agenda.email);
    }
}

ver("nome");