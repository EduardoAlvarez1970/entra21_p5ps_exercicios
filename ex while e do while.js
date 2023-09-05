/*1) Supondo que a população de um país A seja da ordem de 80.000 habitantes
com uma taxa anual de crescimento de 3% e que a população de B seja 200.000
habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule
e escreva o número de anos necessários para que a população do país A ultrapasse
ou iguale a população do país B, mantidas as taxas de crescimento.*/

let populaçãoA = 80000;
let taxaAnualA = 3 / 100; 

let populaçãoB = 200000;
let taxaAnualB = 1.5 / 100;          ///     OK !!!! 

let anos = 0;

while (populaçãoA < populaçãoB) {
   populaçãoA = populaçãoA + (populaçãoA * taxaAnualA);
   populaçãoB = populaçãoB + (populaçãoB * taxaAnualB);
   anos++;
} 

console.log("A população A tera " + ' ' + populaçãoA + ' ' + 'habitantes')
console.log("A população B tera " + ' ' + populaçãoB + ' ' + 'habitantes')
console.log("A população A tera " + ' ' + anos + ' ' + ' anos para alcanzar a populaçãoB')

/*2) Os números primos possuem várias aplicações dentro da Computação, por exemplo,
na criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo.
Faça um programa que peça ao usuário para digitar um número e informe se ele é primo.*/

let numero = Number(prompt('digite um numero'))
let primo = true;
let contador = 0;

while (contador <= numero) {

    if (numero == 0 || numero == 1) {
        primo = false
      }
    
    if(contador > 1 && contador < numero) {     //     ok !!! 
        
      if (numero % contador == 0)
        primo = false
    }
    
 contador++               
} 
  
if(primo) {
    alert("E primo")
  } else alert("nao e primo")

alert(`O contador iterou ${contador} vezes`)

/*Depois implemente um laço de repetição para solicitar cinco números inteiros e mostre
na tela se são primos ou não.*/

let counter = 0;
while (counter < 5) {

  let numero = Number(prompt('digite um numero'))
  let primo = true;
  let contador = 0;

while (contador <= numero) {

  if (numero == 0 || numero == 1) {
      primo = false
    }                                        // ok !!   
  
  if(contador > 1 && contador < numero) {
      
    if (numero % contador == 0)
      primo = false
  }
  
contador++               
} 

if(primo) {
  alert("E primo")
} else alert("nao e primo")

counter++
}


/*3) Faça um programa que gera uma lista dos números primos existentes entre 1 e um 
número inteiro digitado pelo usuário.*/

let numeroFinal = Number(prompt("Digite um número para criação da lista : "))

let numeroAtual = 2;

while (numeroAtual <= numeroFinal) {
    let ehPrimo = true;
    
    let divisor = 2                              //  ok !!

 do {
  if (numeroAtual % divisor === 0) {
    ehPrimo = false;
    break;
  }
  divisor++
}
while (divisor <= numeroAtual / 2);

if (ehPrimo) {
    alert (`Esses número são primos : ${numeroAtual}`)
}

numeroAtual++
}

/*4) Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis
raros. Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o 
nome do vinil e o valor, repetidamente. Caso o valor ultrapasse R$200, encerrar
(desconsiderando o último vinil). Mostrar na tela:

a) O total gasto em reais dos vinis.
b) O valor que sobrou em dinheiro.
c) Quantos vinis foram comprados.               
d) A média de preço dos vinis.
e) O vinil mais caro e o mais barato.*/

let orçamento = 200; 
let gastoTotal = 0;
let gastoParcial = 0;
let totalVinilos = 0;
let maisCaro = 0;
let maisBarato = 0;
let nomeVinilo;
let valorVinilo;
let i = 0;

while (gastoParcial < orçamento) {

    nomeVinilo = prompt('Digite o nome do vinilo')
    valorVinilo = Number(prompt('Digite o valor do vinilo'));
    gastoTotal = gastoTotal + valorVinilo;
    saldo = orçamento - gastoParcial;
    totalVinilos++;

    if (gastoTotal > 200) {                   
        alert(`Exede o orçamento`)
            totalVinilos = totalVinilos - 1;
            gastoTotal = gastoTotal - valorVinilo;
        break;
     }
     
     if (valorVinilo > 0 && valorVinilo < 200) {
        maisCaro = valorVinilo;
        maisBarato = valorVinilo;
    }
    
    if (valorVinilo > maisCaro){
        maisCaro = valorVinilo
    }                                 // me esta tomando el ultimo valor, CORREGIRLO!!! //
    if (valorVinilo < maisBarato){
        maisBarato = valorVinilo
    }
     gastoParcial++
}
 
let valorSobrante = orçamento - gastoTotal;
let mediaVinilo = gastoTotal / totalVinilos;

alert(`El gasto total es ${gastoTotal}`)
alert(`O valor que sobrou é: ${valorSobrante }`)
alert(`A quantidade de vinilos compradas foi ${totalVinilos}`)
alert(`A média de preço dos vinis foi: ${mediaVinilo}`)
alert(`O vinilo mais caro foi ${maisCaro} e o mais barato foi ${maisBarato}`)


/*5) Santa Catarina é conhecida por suas quatro estações bem definidas,o que o 
torna um estado com alta amplitude térmica (diferença entre
a maior e a menor temperatura, registrada em um período). O INMET,
Instituto Nacional de Meteorologia, pretende ter os dados de amplitude
térmica de uma cidade ou estado. Desenvolva um programa que calcule e
mostre os dados diários (segunda à sexta) e a média de amplitude térmica
semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade
ou estado, perguntar para os cinco dias da semana a maior temperatura do dia
e a menor. Mostrar as amplitudes de cada dia e a média.*/

let cidade = prompt('Digite o nome da cidade');
let tempMaior;
let tempMenor;
let somaAmplitude = 0;
let mediaAmplitude = 0;
                                        // ok resolvido
for(i = 0; i < 5; i++) {
tempMaior = Number(prompt('Digite a Maior temperatura'));
tempMenor = Number(prompt('Digite a Menor temperatura'));
let amplitude = tempMaior - tempMenor;
alert( `A amplitude diária: ${amplitude} graus celsius`);
somaAmplitude = somaAmplitude + amplitude;
}
mediaAmplitude = somaAmplitude / 5;
alert(`A temperatura media semanal foi ${mediaAmplitude}`)

/*6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada
na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de
'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o
usuário deve digitar o tempo total do projeto em dias e o período das sprints.
Após calculado o número de sprints (média), arredondando o número para baixo,
cadastrar para cada sprint um título e um objetivo.*/

let tempoTotal = Number(prompt('Digite o tempo total do projeto em dias'));
let periodoSprints = Number(prompt('Digite o período das Sprints (15 ou 30 dias)'));
let titulo;
let objetivo;

let cantidadeSprints = Math.floor(tempoTotal / periodoSprints);

alert(`A cantidade de sprints sera de ${cantidadeSprints}`)          /// ok

while(cantidadeSprints > 0) {

    titulo = prompt('Defina o nome do projeto');
    objetivo = prompt('Defina o objetivo do projeto');
    
console.log(`Projeto: ${titulo}, objetivo: ${objetivo}`)

    cantidadeSprints--;
}

/*7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é 
o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar
um sistema simples de jogo, onde no início é solicitado o número de jogadores
e para cada jogador deve-se armazenar valores de quatro jogadas de um D20.
A pontuação do jogador é definida excluindo o primeiro e o último valor,
somando então os valores da segunda e terceira jogadas. Ao final mostrar
a soma de cada jogador e suas posições. (DESAFIO: validar os valores de 
1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos 
valores do dado, repetir a pergunta)*/

let numeroJogadores = Number(prompt('Digite o número de jogadores'));
let jugada;
let contador1;
let qtdJogadas = 0;
let pontuação = 0; 
let jogador = 0;


for (contador1 = 0; contador1 < numeroJogadores; contador1++) {

    jogador = jogador + 1;

    alert(`Joga o jogador ${jogador}`);
                                                    // ok !!
      while(qtdJogadas < 4) {

        jugada = Number(prompt('Digite um valor de 1 ao 20'));

         if(qtdJogadas !== 0 && qtdJogadas !== 3) {
            pontuação = pontuação + jugada;
            contador1 == contador1 +1;
          }
      qtdJogadas++;             
      }
  
    alert(`Pontuação do jogador ${contador1 + 1} = ${pontuação}`);

 qtdJogadas = 0;
 pontuação = 0;

}

/*8) Na maioria das linguagens de programação, é possível contar caracteres
de uma string (palavra, frase, etc). Criar um sistema no qual o usuário 
digite 5 palavras e ao final mostre o tamanho em número de caracteres,
de cada uma delas. (Pesquisar sobre o comando length, para solução).*/

let palav;
let caracteres;                                            // ok !!!

for (i = 0; i < 5; i++) {
  palav = prompt('Digite uma palavra');
  caracteres = palav.length;
  alert(`Palavra ${palav} tem ${caracteres} caracteres`)
}

/*9) Um determinado restaurante trabalha com limite de lotação de 50 
pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar
seu atendimento antes do horário por falta de insumos para produção
das refeições. Criar um programa que receba os dados da quantidade
de pessoas que chegam ao restaurante (repetidamente) e se os insumos
estão "ok" ou "insuficientes". Caso alguma das duas possibilidades
aconteça, encerrar o programa e mostrar ao final o motivo do encerramento 
(atingiu limite de pessoa ou faltaram insumos).*/