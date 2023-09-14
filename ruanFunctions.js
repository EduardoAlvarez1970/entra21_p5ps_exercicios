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





/*Crie 2 funções: a primeira recebe 3 números como argumento, realize a soma desses
3 números e chama a segunda função, que por sua vez recebe como argumento uma
soma e uma quantidade e retorna a média. Armazene o resultado da média em uma
variável e exiba por um alert.*/





/*Faça um programa que recebe três números do usuário, e identifica o maior através
de uma função e o menor número através de outra função e depois os exibe por um
alert.*/




/*Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até
ele.*/