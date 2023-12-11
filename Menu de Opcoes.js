function menuProgram(opcao) {
    switch (opcao) {
        case 'Perfil':
            console.log('Você escolheu a opção Perfil.');
            break;

        case 'Home':
            console.log('Você escolheu a opção Home.');
            break;

        case 'sobreNós':
            console.log('Você escolheu a opção Sobre Nós.');
            break;

        default:
            console.log('Opção inválida.');
    }
}

menuProgram('Perfil');
