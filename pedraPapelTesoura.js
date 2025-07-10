const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

function jogar() {
    console.log('\nBem-vindo ao jogo Pedra, Papel e Tesoura!');
    console.log(' 1 - Pedra');
    console.log(' 2 - Papel');
    console.log(' 3 - Tesoura');
    console.log(' 4 - Sair');

    readline.question('Escolha uma opção (1, 2, 3 ou 4): ', (resposta) => {
        const escolha = parseInt(resposta, 10);

        if (escolha === 4) {
            console.log('Obrigado por jogar! Até a próxima.');
            return readline.close();
        }

        if (![1, 2, 3].includes(escolha)) {
            console.log('Opção inválida! Tente novamente.');
            return jogar();
        }

        const escolhaJogador = opcoes[escolha - 1];
        const computador = Math.floor(Math.random() * 3);
        const escolhaComputador = opcoes[computador];

        console.log(`Você escolheu: ${escolhaJogador}`);
        console.log(`Computador escolheu: ${escolhaComputador}`);

        if (escolha - 1 === computador) {
            console.log('Empate!');
        } else if (
            (escolha - 1 === 0 && computador === 2) ||
            (escolha - 1 === 1 && computador === 0) ||
            (escolha - 1 === 2 && computador === 1)
        ) {
            console.log('Você venceu!');
        } else {
            console.log('Você perdeu!');
        }

        jogar();
    });
}

jogar();