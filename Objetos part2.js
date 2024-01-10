/*    
1.Crie um objeto representando um carro com propriedades como modelo, cor e ano de fabricação.
2.Adicione um método ao objeto do carro que retorna uma string com informações sobre o carro, como "Um carro [cor] [modelo] fabricado em [ano]".
3.Crie um objeto representando uma pessoa com propriedades como nome, idade e profissão.
4. Adicione um método ao objeto da pessoa que retorna uma saudação personalizada, como "Olá, meu nome é [nome] e eu sou [profissão]".
*/


/*1. Crie um objeto representando um carro com propriedades como modelo, cor e ano de fabricação.*/

    let carro = {
      cor: "preto", 
      modelo: "Jeep", 
      anofabricação: 2022,
      infosCarro: function() {
        return `Um carro ${this.cor} ${this.modelo} fabricado em ${this.anofabricação}`;
    }
  };

/*2.Adicione um método ao objeto do carro que retorna uma string com informações sobre o carro, como "Um carro [cor] [modelo] fabricado em [ano]".*/

console.log(carro.infosCarro());


/*3.Crie um objeto representando uma pessoa com propriedades como nome, idade e profissão.*/

  let pessoa = {
    nome: "Satoru",
    idade: "40",
    profissão: "Feitiçeiro jujutsu",
    infosPessoa: function() {
      return `Olá meu nome é ${this.nome} tenho ${this.idade} e sou ${this.profissão}`;
    }
  }

/*4. Adicione um método ao objeto da pessoa que retorna uma saudação personalizada, como "Olá, meu nome é [nome] e eu sou [profissão]".*/

console.log(pessoa.infosPessoa())