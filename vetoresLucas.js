/*1) Uma lista com números de 1 a 15 foi criada por engano,
quando na verdade deveria ser apenas de 1 a 5.
Desenvolver um programa que remova os números a mais
para corrigi-la. Mostrar a lista corrigida na tela.*/

const listaOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (i = 0; i < 10; i++) {

   listaOriginal.pop() 

} 

alert(`A nova lista original e \n ${listaOriginal}`)

console.log(listaOriginal);

/*2) Desenvolva um programa que o usuário digite 10 números,
ao final  mostre o valor do resultado do somatório da primeira
metade dos números menos o somatório da segunda metade.
(Somatório da primeira metade - Somatório da segunda metade)*/

let digiteNumero;
let total = 0;
let primeraMitad = [];
let segundaMitad = [];
let somaPrimera = 0;
let somaSegunda = 0;

for(i = 0; i < 10; i++) {

    digiteNumero = Number(prompt('Digite um numero'));

    if (i < 5) {
    
       primeraMitad.push(digiteNumero);
       somaPrimera = somaPrimera + digiteNumero;
    }

    if ( i >= 5) {

      segundaMitad.push(digiteNumero);
      somaSegunda = somaSegunda + digiteNumero;
    }
}

alert(`Numeros primera mitade: ${primeraMitad}, numeros segunda mitade ${segundaMitad}`)

let resultadoFinal = somaPrimera - somaSegunda;

alert(`Somatório da primeira metade - Somatório da segunda metade e igual a ${resultadoFinal}`)

/*3) Cria um programa onde o usuário digite 5 números.
Ao terminar de digitar os números, mostrar uma lista
somente com números ímpares digitados e a soma desses números.*/

let digNum;

let somaImpares = 0;

let impares = [];

for(i = 0; i < 5; i++) {

    digNum = Number(prompt('Digite um numero'));

    if (digNum % 2 != 0) {

    impares.push(digNum)

    somaImpares = somaImpares + digNum;
    }
}

alert(`A lista de numeros impares e ${impares}`)
alert(`A somatoria de numeros impares e ${somaImpares}`)

/*4) Escreva um programa que leia dois vetores com 3 elementos
cada e gere um terceiro vetor de 6 elementos, cujos valores deverão
ser compostos pelos elementos intercalados dos dois outros vetores.
Ao final o programa deverá mostrar os dois vetores originais
 e o terceiro vetor com os valores intercalados.*/

 let arrayUno = ['Vermelho', 'Preto', 'Amarelo'];      
 let arrayDos = ['Red', 'Black', 'Yellow'];

 let novoArray = [arrayUno[0], arrayDos[0],arrayUno[1], arrayDos[1],arrayUno[2], arrayDos[2]];

 alert(`O 1er vetor tem cores em Portugueis: ${arrayUno}`)
 alert(`O 2do vetor tem cores em Ingles: ${arrayDos}`)
 alert(`O 3er vetor intercala as cores em ambos idiomas: ${novoArray}`)

/*5) Crie um vetor de 10 números e peça para o usuário qual número
ele deseja verificar se existe no vetor. Caso exista, o programa
deve mostrar todos os índices que ele se encontra.*/







/*6) Fazer um programa no qual o usuário deve digitar as três cores
primárias (amarelo, vermelho, azul) e armazenar em um vetor.
Solicitar três vezes “Digite uma cor primária: ”. 
Em seguida deve digitar as três cores secundárias (laranja, verde, violeta)
e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”.
Um novo vetor deve ser criado com cores primárias + secundárias
(amarelo, vermelho, azul, laranja, verde, violeta). 
No início dessa lista deve-se adicionar preto e no final branco.
Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”.
Mostrar na tela a sequência completa, incluindo preto e branco.*/








/*7) Faça um programa que solicite ao usuário digitar 5 números
e mostre a soma da multiplicação dos números pelo maior número
digitado. (Exemplo: pegar os 4 números digitados que não são o
maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).*/







/*8) Em cidades menores, o alistamento para o exército acontece 
esporadicamente ao longo dos anos. Criar um programa no qual
pergunte ao usuário se houve alistamento dos anos 2000 a 2009,
uma pergunta para cada ano. Se houve alistamento deve ser digitado
“S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar
na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento,
mostrar “Não houve alistamento nos últimos 10 anos”*/