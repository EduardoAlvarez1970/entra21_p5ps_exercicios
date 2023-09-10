/*1) Desenvolver um programa no qual o usuário digite o número
de multas que deseja cadastrar e para cada multa deve colocar
o valor em reais e os pontos perdidos na carteira de habilitação.
Ao final, mostrar o somatório das multas e dos pontos, 
caso os pontos alcancem 21 ou mais, exibir a mensagem 
“Você está irregular”, senão, exibir “Você está regular”.*/

let multas = Number(prompt('Digita o numero de multas'));
let valorMultas;
let valorPontos;

let somaMultas = 0;
let somaPontos = 0;

for(i = 0; i < multas; i++) {
    valorMultas = Number(prompt('Digita o valor da multa'));
    valorPontos = Number(prompt('Digita o valor dos pontos perdidos na carteira'));
    somaMultas = somaMultas + valorMultas;
    somaPontos = somaPontos + valorPontos; 
}

alert(`O valor total das multas é R$ ${somaMultas}, o valor total de pontos é ${somaPontos}`)

if (somaPontos < 21) {
    alert('Voce está regular')
} else {
    alert('Voce esta irregular')
}

/*2) Fazer um programa no qual o usuário deve montar uma salada de
frutas com uma cereja no final. Deve ser perguntado em sequência
“Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar
a frase “Sua salada de frutas está pronta!” (DESAFIO: Mostrar na 
tela também a quantidade de frutas que foram adicionadas)*/

let quantidadeFrutas = 0;

for (i = 0; i < 10; i++) {
    let frutas = prompt('Qual fruta adicionar?');
    quantidadeFrutas = quantidadeFrutas + 1;

    if(frutas == 'cereja') {
        alert('Sua salada de frutas está pronta!');
        alert(`Foram adicionadas ${quantidadeFrutas} frutas`);
        break;
    }

}

/*3) Desenvolva um programa no qual o usuário deve digitar o nome
e a idade de 5 pessoas. Ao final mostrar a média de idade delas 
e a maior idade dentre essas pessoas. */

let nomePessoa;
let idadePessoa;
let counter = 0;
let somaIdades = 0;
let maiorIdade = 0;

while(counter < 5) {
    nomePessoa = prompt('Digite o nome da pessoa');
    idadePessoa = Number(prompt('Digita a idade da pessoa'));

    if(maiorIdade == 0) {
        maiorIdade = idadePessoa
    } if (idadePessoa > maiorIdade) {
        maiorIdade = idadePessoa
    }

    somaIdades = somaIdades + idadePessoa;

  counter++;
}

let médiaIdades = parseInt(somaIdades / counter);

alert(`A média de idade das pessoas é ${médiaIdades} e a maior idade é ${maiorIdade}`)

/*4) Faça um programa no qual o usuário deve digitar a sequência de
números de 1 a 10, invertida. Caso digite algum número fora da sequência,
interromper e mostrar uma mensagem "Você errou a sequência". Do contrário,
ao final mostrar uma mensagem "Você terminou a sequência corretamente".*/

let digSeq;

for (i = 10; i > 0; i --) {

    digSeq = Number(prompt('Digite a sequencia de 1 a 10 em orden invertida'))

    if (digSeq != i) {

        alert(`Você errou a sequencia`)

    }

}

alert(`Você terminou a sequência corretamente`)

/*5) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50.
Ao final deve mostrar o maior número digitado e o menor número digitado. 
Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.*/

let numMaior = 0;
let numMenor = 0;
let i = 0;

while (i < 10) {

    let digi = Number(prompt('Digite um numero entre o e 50'));

    if (numMenor == 0) {
        numMenor = digi;
    } 
    if (digi < numMenor && digi < 51) {
        numMenor = digi;
    } if (digi > numMaior && digi < 51) {
        numMaior = digi
    }

    i++;
}

alert(`O mnenor numero digitado foi ${numMenor} e o maior foi ${numMaior}`)

/*6) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas
de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa
deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo 
até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se 
mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o
total acumulado de economia.*/

let messagem = alert('O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos');

let moeda1centavo = 0;
let moeda5centavo = 0;
let moeda10centavo = 0;
let moeda25centavo = 0;
let moeda50centavo = 0;

let q1centavo = 0;
let q5centavo = 0;
let q10centavo = 0;
let q25centavo = 0;
let q50centavo = 0;

let x = 10;


while ( x > 0) {
    
    let insiraMoeda = Number(prompt('Digite qual moeda deseja inserir'));

    switch(insiraMoeda) {
        case 1:
            moeda1centavo = moeda1centavo + insiraMoeda;
            q1centavo = q1centavo + 1;
            break;
        case 5:
            moeda5centavo = moeda5centavo + insiraMoeda;
            q5centavo = q5centavo + 1;
            break;
        case 10:
            moeda10centavo = moeda10centavo + insiraMoeda;
            q10centavo = q10centavo + 1;
            break;
        case 25:
            moeda25centavo = moeda25centavo + insiraMoeda;
            q25centavo = q25centavo + 1;
            break;
        case 50:
            moeda50centavo = moeda50centavo + insiraMoeda;
            q50centavo = q50centavo + 1;
            break;
        }

        if (insiraMoeda == 0) {
            break;
        }
   x++;
}

let somaMoedas = moeda1centavo + moeda5centavo + moeda10centavo + moeda25centavo + moeda50centavo;

alert(`Voce coloca: \n ${q1centavo} moedas de 1 centavo, \n ${q5centavo} moedas de 5 centavo, \n ${q10centavo} moedas de 10 centavo, \n ${q25centavo} moedas de 25 centavo, \n ${q50centavo} moedas de 50 centavo, \n e a soma total e de ${somaMoedas} `)


/*7) O acampamento base sul do Everest fica a cerca de 5.360m de altura.
A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m 
de altura, levando dias para chegar. Considerando a saída do acampamento
base, faça um programa que pergunte ao usuário a altitude em metros escalada 
no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume,
mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”.
Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.*/

let base = 5360;
let cume = 8848;
let diasParaChegar;
let altitudeDodia;

for (diasParaChegar = 0; diasParaChegar < 8; diasParaChegar++) {

    altitudeDodia = Number(prompt('Digite a altitude escalada no dia'));

    base = base + altitudeDodia;

    if (diasParaChegar == 7) {
        alert('Você deve voltar, pois corre risco de ficar sem oxigênio')
        break;
        }

    if (base >= cume) {
        alert(`Voce chegou na cume em ${diasParaChegar + 1} dias `)
        break;
    }
}

/*8) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar
o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia 
pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha
"jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver
a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate,
mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores
entre 1 e 13, como no baralho).*/

let jog1 = prompt('Digite o nome do jogador 1');
let jog2 = prompt('Digite o nome do jogador 2');

let jogaNum1;
let jogaNum2;

let somaJug1 = 0;
let somaJug2 = 0;

let jogadas = 0;

while (jogadas < 5) {
    jogaNum1 = Number(prompt('Digite o valor da carta do Jogador 1'));
    if (jogaNum1 > 13) {
        alert('Numero de carta errado');
        break;
    }
    somaJug1 = somaJug1 + jogaNum1;

    jogaNum2 = Number(prompt('Digite o valor da carta do Jogador 2'));
    if (jogaNum2 > 13) {
        alert('Numero de carta errado');
        break;
    }
    somaJug2 = somaJug2 + jogaNum2;

    jogadas++
}

if (somaJug1 > somaJug2) {
    alert(`O jogador 1 (${jog1}) ganhou o jogo com ${somaJug1} pontos)`)
} else if ( somaJug1 === somaJug2) {
    alert(`O jogo empatou!`)
} else {
    alert(`O jogador 2 (${jog2}) ganhou o jogo com ${somaJug2} pontos)`) 
}

/*9) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100
(número secreto). Em seguida deve ser perguntado qual número imagina-se que seja
o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número 
digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado,
mostrar uma mensagem de parabéns e o número de tentativas realizadas.*/

let numeroSecreto = Math.floor(Math.random() * 101);
console.log(numeroSecreto)

let conta = 0;
while(conta < 100) {

let pergunta = Number(prompt('Qual número imagina-se que seja o número secreto?'));

   if (pergunta === numeroSecreto) {
    alert(`Parabens!! Voce acertou em ${conta +1} tentativas`);
    break;
   } else if (pergunta < numeroSecreto) {
        alert('o número digitado é menor')
     } else {
         alert('o número digitado é maior')
       }

  conta++;
}

/*10) Em uma competição de dardos, os competidores se classificam para
a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos.
Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. 
Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos,
dependendo da precisão. Criar um programa para armazenar a pontuação dos
6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação,
seu desempenho (percentual) e se ele está classificado, se foi
 para a repescagem ou se está desclassificado.*/

 let pontuaçãoTotal = 60;

 let pontosMax = (pontuaçãoTotal * 75) / 100;  // 45
 let pontosMin = (pontuaçãoTotal * 50) / 100;  // 30

 let tiroDardo;
 let somaPontuação = 0;

 let arremesos = 0;

 while (arremesos < 6) {
    tiroDardo = Number(prompt('Digite a pontuação do seu arremeso ( de 0 a 10)'));
    somaPontuação = somaPontuação + tiroDardo;
    arremesos++
 }

 let desempenho = (somaPontuação / 6) * 10;

 if(somaPontuação >= pontosMin && somaPontuação < pontosMax) {
    alert(`Seus pontos foram ${somaPontuação}, seu desempenho foi de ${desempenho} %,  você vai para a repescagem`)
 } else if (somaPontuação < pontosMin) {
    alert(`Seus pontos foram ${somaPontuação},seu desempenho foi de ${desempenho} %., você está eliminado`)
   } else {
    alert(`Seus pontos foram ${somaPontuação},seu desempenho foi de ${desempenho} %, está classificado`)
     }

