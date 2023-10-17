/*1- Uma construtora precisa de um sistema que realiza o cálculo da aréa de diversos
terrenos retangulares por meio de uma função, você recebeu o relatório com as
medidas dos lados dos terrenos e precisa repassar os valores das áreas. Sendo assim,
crie a função para realizar os cálculos dos seguintes terrenos (crie uma função e faça 4
chamadas passando diferentes valores de parâmetros):
- Terreno padrão: largura: 50m / profundidade: 40m
- Terreno sobrado: largura: 30m / profundidade: 40m
- Terreno mansão: largura: 100m / profundidade: 100m
- Terreno comercial: largura: 40m / profundidade: 40m*/

function calculoArea (largura, profundidade) {
    return largura * profundidade;
}

let areaPadrão = calculoArea(50, 40)
alert(`Area padrão e: ${areaPadrão}`)
                                                   // ok

let areaSobrado = calculoArea(30, 40)
alert(`Area sobrado e: ${areaSobrado}`)

let areaMansão = calculoArea(100, 100)
alert(`Area mansão e: ${areaMansão}`)

let areaComercial = calculoArea(40, 40)
alert(`Area comercial e: ${areaComercial}`)


/*A partir da função de área retangular criada anteriormente, crie uma função que calcula
a área de um triangulo, a qual deve receber um valor de base e altura como argumento,
calcular a área pela função área e divide o resultado por 2 para ter o retorno correto.*/

function calculoArearetangular (largura, profundidade) {
    return largura * profundidade;
}

let base = Number(prompt('Digite a base do triangulo'))
let altura = Number(prompt('Digite a altura do triangulo'))

                                                                      // ok
function areaTriangulo (x, a) {

    let area = calculoArearetangular(x, a) / 2;

    return area;
}
 
let areaTri = areaTriangulo(base, altura)
alert(`A area do triangulo e ${areaTri}`)


/*Crie uma função que determine quantos números primos existem dentro de um
intervalo que o usuário informar. Utilize uma abordagem de repetição com for ou while.*/

let numeroInicial = Number(prompt("Digite o primeiro numero"))
let numeroFinal = Number(prompt("Digite o numero final"))
let contagem = 0
let lista = []
// Rodando um loop do inicial até o final
while(numeroInicial <= numeroFinal){
  // Chamar uma função passando o numeroInicial que retorne se é primo ou não
  let verificacao = verificaPrimo(numeroInicial)
  if(verificacao == true){
    contagem++
    lista.push(numeroInicial)
  }
  numeroInicial++
}

console.log(contagem)
console.log(lista)

function verificaPrimo(numero){
  console.log(`Verificando o numero ${numero}`)
  let primo = true
  // Dividir o numero por 2, 3, 4... até antes dele mesmo
  // Se o resto der 0 em algum caso, não é primo
  contador = 2
  while(numero > contador){
//     console.log(`O contador é ${contador}`)
    if(numero % contador == 0){
      // numero não primo
      primo = false
    } 
    contador++
  }
//   console.log(`Resultado da verificação do numero ${numero}: ${primo}`)
  return primo 
}

// REVISARLO !!! ESTA MAL PORQUE EN LA LISTA 0 Y 1 DAN COMO PRIMOS !!!! 
// HABRIA QUE CREAR UNA CONDICION QUE ELIMINE TAMBIEN DE MOVIDA EL O Y E 1



/*Utilizando funções, fazer um sistema que receba um número e retorne se ele é par ou
ímpar.*/

let numero = Number(prompt('Digite um numero'));

function myFunction() {
                                           // OK
  if (numero % 2 == 0) {

  return "E par"

} else return "E impar"

}

alert(myFunction())

/*Criar uma calculadora utilizando funções para cada operação. O usuário deve digitar o
primeiro número, o segundo número e em seguida a operação que deseja realizar (1 -
Soma 2 - Subtração 3 - Multiplicação 4 - Divisão). O resultado deve ser mostrado na tela.
Digite o primeiro número:
Digite o segundo número:
Qual operação deseja realizar? 1 – Soma 2 – Subtração 3 – Multiplicação 4 - Divisão*/



function soma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

operacao = parseInt(prompt("Qual operação deseja realizar?\n1 – Soma\n2 – Subtração\n3 – Multiplicação\n4 - Divisão"));


let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch(operacao) {

    case 1:
    resultado = soma(a, b);
    break;

    case 2:
    resultado = resta(a, b);
    break;                      //////  ok

    case 3:
    resultado = multiplica(a, b);
    break;

    case 4:
    resultado = divide(a, b);
    break;

    default:

    alert('operacao nao permitida')

}

alert(`O resultado é: ${resultado}`);

/*Crie 2 funções: a primeira recebe 3 números como argumento, realize a soma desses
3 números e chama a segunda função, que por sua vez recebe como argumento uma
soma e uma quantidade e retorna a média. Armazene o resultado da média em uma
variável e exiba por um alert.*/

function somar(a, b, c) {
    return  a + b+ c;
}                                        /// ok

function media(soma, quantidade) {
    return soma / quantidade;
}

let num1 = parseFloat(prompt('Digite o primer numero'));
let num2 = parseFloat(prompt('Digite o segundo numero'));
let num3 = parseFloat(prompt('Digite o tercer numero'));

let somaNum = somar(num1, num2, num3);

let quantidadeNum = 3;

let mediaNum = media(somaNum, quantidadeNum);

alert(`A media e ${mediaNum}`)


/*Faça um programa que recebe três números do usuário, e identifica o maior através
de uma função e o menor número através de outra função e depois os exibe por um
alert.*/

let primerNumero = parseFloat(prompt('Digite o primer numero'));
let segundoNumero = parseFloat(prompt('Digite o segundo numero'));
let tercerNumero = parseFloat(prompt('Digite o tercer numero'));

function maior(a, b, c) {
    if(a > b && a > c) {                              
        return a
    } else if(b > a && b > c) {
        return b
    } else {
        return c
    }
}
function menor(a, b, c) {
    if(a < b && a < c) {                               /// ok
        return a
    } else if(b < a && b < c) {
        return b
    } else {
        return c
    }
}

let resultadoMaior = maior(primerNumero, segundoNumero, tercerNumero);
let resultadoMenor = menor(primerNumero, segundoNumero, tercerNumero);

alert(`O numero maior e ${resultadoMaior} e o numero menor e ${resultadoMenor}`)



/*Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até
ele.*/

function encontrarPrimos(numeroDigitado) {
    
    let listaPrimos = [];

   for(i = 2; i <= numeroDigitado; i++) {

       var primo = true; 

         for(x = 2; x < i; x++) {
            if (i % x == 0) {
            primo = false;
            break;
         }
       }

          if (primo) {
            listaPrimos.push(i)
          }
   }
    
   return listaPrimos
}


var numeroDigitado = parseInt(prompt('Digite um numero inteiro'))

var primosAteNumero = encontrarPrimos(numeroDigitado);


alert(`Os numeros primos ate: ${numeroDigitado} sao:\n ${primosAteNumero}`)
