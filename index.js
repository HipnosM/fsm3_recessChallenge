/*Jogo de adivinhação inteligente
o programa deve adivinhar o número secreto escolhido pelo usuário usando busca binária.*/
const readline = require("readline-sync");

let tentativas = 0;
let tempo = 0;

function iniciarJogo() {
    let min = 1;
    let max = 300;
    let numeroSecreto = readline.questionInt("O numero secreto deve ser entre 1 e 300\n");
    
    // numero secreto em um determinado intervalo
    while(numeroSecreto <= 0 || numeroSecreto > 300) {
        console.log("Numero deve ser entre 1 e 300!");
        numeroSecreto = readline.questionInt("O numero secreto deve ser entre 1 e 300\n");
    };
    
    while(min <= max) {
        // o programa faz palpite e o jogador deve dizer se é "maior", "menor" ou se o programa "acertou" o número
        let palpite = Math.floor((min + max) / 2);
        // contar o número de tentativas
        tentativas++;
        const resp = readline.question(`O numero secreto e: ${palpite}? (maior, menor ou igual)\n`);

        if(min > max) {
            console.log("Numero fora do intervalo! Tente novamente!");
        };
        
        // validar as respostas do jogador
        if(resp.toLowerCase() == "maior") {
            min = palpite + 1;
        } else if(resp.toLocaleLowerCase() == "menor") {
            max = palpite - 1;
        } else if(resp.toLocaleLowerCase() == "igual") {
            console.log(`O numero secreto e ${palpite}! Acertei!`);
            console.log(`Tentativas: ${tentativas}`);
            // perguntar se o jogador quer jogar novamente
            let novaPartida = readline.question("Deseja jogar novamente? (sim/nao)\n");
            if(novaPartida.toLocaleLowerCase() == "sim") iniciarJogo();
            else {
                console.log("Foi bom jogar com voce!");
                break;
            }
        } else {
            console.log("responda com maior, menor ou igual!");
        };
    };
};

iniciarJogo();
