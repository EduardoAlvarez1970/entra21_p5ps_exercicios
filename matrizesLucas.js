/*1) Criar uma matriz numérica 3 x 3,
   pedindo para o usuário digitar os valores.

a) Mostrar na tela a soma da última linha
b) Mostrar na tela a soma da coluna do meio
c) Mostrar na tela a subtração da soma da diagonal
   principal pela diagonal inversa.*/

   
let matrizNumerica = [[], [], []];

for(i = 0; i < 1; i++) {

    for(j = 0; j < 3; j++) {

        digite = Number(prompt('Digite um numero'))
        matrizNumerica[j].push(digite)
        digite = Number(prompt('Digite um numero'))
        matrizNumerica[j].push(digite)
        digite = Number(prompt('Digite um numero'))
        matrizNumerica[j].push(digite)
    }
}

console.table(matrizNumerica)

/*a) Mostrar na tela a soma da última linha*/

let somaUltimaLinha = matrizNumerica[2][0] + matrizNumerica[2][1] + matrizNumerica[2][2];
alert(`A soma da ultima linha e: ${somaUltimaLinha}`)

/*b) Mostrar na tela a soma da coluna do meio*/

let somaColunaMeio = matrizNumerica[0][1] + matrizNumerica[1][1] + matrizNumerica[2][1];
  alert(`A soma da coluna do meio e: ${somaColunaMeio}`)

/*c) Mostrar na tela a subtração da soma da diagonal principal pela diagonal inversa.*/

let diagonales = (matrizNumerica[0][0] + matrizNumerica[1][1] + matrizNumerica[2][2]) - (matrizNumerica[0][2] + matrizNumerica[1][1] + matrizNumerica[2][0])
alert(`A subtração da soma da diagonal
principal pela diagonal inversa e: ${diagonales}`)









 
/*2) Pedir para o usuário digitar 12 nomes, para formar
   uma matriz 3 x 4. Caso um nome já existe (tenha sido digitado antes),
   criar um validação para que o usuário não posso mais digitá-lo.
   Após formar a matriz, mostrar na tela uma nova matriz 3 x 2 criada
   com números intercalados (primeiro, terceiro, quinto, sétimo, etc)*/