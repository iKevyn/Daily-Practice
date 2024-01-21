

// 1.  criar titulo - ok
// 2. criar campo texto - ok 
// 3. criar botao - ok
// 4. criar funcao de adicao a lista - ok?

//Titulo
let titulo = document.createElement("h1"); // Criacao do titulo
titulo.innerHTML="Reminders"; //escolhendo oque sera escrito dentro
document.body.appendChild(titulo); //inserindo o elemento na pagina

//Campo de digitacao
let campoDigitacao = document.createElement("input"); //criando input
campoDigitacao.placeholder = "adicionar";//selecionando tipo de input e escolhendo oque sera inserido dentro
document.body.appendChild(campoDigitacao);//inserindo o elemento na pagina

//botao
let botao = document.createElement("button"); //criando botao
botao.innerHTML="Add";//escolhendo oque sera escrito dentro
document.body.appendChild(botao)//inserindo o elemento na pagina

//lista
let lista = document.createElement("ul"); //criando lista
document.body.appendChild(lista); // inserindo o elemento na pagina

//funcao do botao
botao.addEventListener("click", function(){ //chamando botao e adicionando uma funcao a ele
    let novoLembrete = document.createElement("li"); //criando elemento de lista
    novoLembrete.innerText = campoDigitacao.value; // dizendo que o conteudo do novolembrete sera oque estiver no campo de digitacao 
    lista.appendChild(novoLembrete);//inserindo o elemento na pagina
})