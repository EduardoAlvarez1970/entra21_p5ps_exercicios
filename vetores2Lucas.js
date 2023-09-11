/*1) Palíndromo é aquele elemento que, se lido de trás para frente
e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678.
Criar um vetor com 6 números digitados pelo usuário e verificar se
o vetor é palíndromo. (DESAFIO: fazer com 7 números e com palavras).*/

let digiteSeisNumeros;

let arrNum = [];

for (i = 0; i < 6; i++) {

    digiteSeisNumeros = Number(prompt('Digite um numero'));

    arrNum.push(digiteSeisNumeros);
}

console.log(arrNum)

  if (arrNum[0] == arrNum[5] && arrNum[1] == arrNum[4] && arrNum[2] == arrNum[3]) {
    alert(`O vetor é palíndromo`)
  } else {
    alert(`O vetor não é palíndromo`)
    }

  //(DESAFIO: fazer com 7 números)

  let digiteSeteNumeros;

  let arrNum2 = [];

    for (i = 0; i < 7; i++) {

         digiteSeteNumeros = Number(prompt('Digite um numero'));

          arrNum2.push(digiteSeteNumeros);

    }

      console.log(arrNum2)

  if (arrNum2[0] == arrNum2[6] && arrNum2[1] == arrNum2[5] && arrNum2[2] == arrNum2[4]) {
    alert(`O vetor é palíndromo`)
  } else {
    alert(`O vetor não é palíndromo`)
    }

/*2) Desenvolver um programa que peça ao usuário o número de doenças a 
cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida
por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças
transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas
por ambos, lista com todas doenças.*/

let numDoenças;
let cadastro;
let nomeDoenças = [];

let virus = 0;
let bacteria = 0;
let ambos = 0;

let tipoTrasmissão;

numDoenças = Number(prompt('Digite o numero de doençãs'))

for (i = 0; i < numDoenças; i++) {

    cadastro = prompt('Cadastras nome da doença');
    nomeDoenças.push(cadastro);

    tipoTrasmissão = Number(prompt('Se trasmitida por virus digite 1, se por bacteria digite 2, se ambos digite 3'));

    if (tipoTrasmissão == 1) {
        virus = virus + 1
    }
     else if (tipoTrasmissão == 2) {
        bacteria = bacteria + 1
    }
      else if (tipoTrasmissão == 3) {
        ambos = ambos + 1
    }

}

alert(`Doençãs trasmitidas por Virus: ${virus},\n doençãs trasmitidas por bacterias: ${bacteria},\n doençãs trasmitidas por ambos: ${ambos}`)
alert(`Lista das doençãs cadastradas: \n ${nomeDoenças}`)

/*3) Faça um programa em que o usuário digite o nome de 5 produtos e 
seus preços (“Digite o produto” / “Digite o seu preço”) e armazene
esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço de R$50 a R$100;
c) A média dos preços dos produtos com preço superior a R$100.*/

let produto = [];
let preço = [];

let a = 0;
let b = [];
let c = 0;
let d = 0;

for (i = 0; i < 5; i++) {
    let askProd = prompt('Digite o produto');
    produto.push(askProd)
    let askPreço = Number(prompt('Digite o seu preço'));
    preço.push(askPreço)

    if (askPreço < 50) {
        a++
       }
       
       if (preço[i] >= 50 && preço[i] <= 100) {
        b.push(produto[i])
       }

         if (askPreço > 100) {
            d = (d + askPreço);
            c = c + 1
         }
} 
    let mediaPreços = d / c;

     alert(`A quantidade de produtos com preço inferior a R$50 é: ${a}`);
      

         alert(`O nome dos produtos com preço de R$50 a R$100 e: ${b} `);


             alert(`A média dos preços dos produtos com preço superior a R$100 e: ${mediaPreços}`)







/*4) Faça um programa que crie um vetor vazio. Esse programa deve
perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as 
opções devem executar as tarefas abaixo. Criar as mensagens e
a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/

let vetorVazio = [];
let opçãoCount = 1;

let cadastrarNome;
let pesquisaNome;
let editNome;


/*3- Editar um nome

0- Sair do programa*/

for (i = 0; i < opçãoCount; i++) {

    opção = Number(prompt('Qual opção o usuário deseja? (1, 2, 3, 4, 5, 0)'));
    opçãoCount++;

    switch(opção) {
        case 1:
           cadastrarNome = prompt('Cadastre um nome') 
           vetorVazio.push(cadastrarNome);
           break;
        case 2:
            vetorVazio.shift()   
            break;
        case 3:
            editNome = prompt('Editar um nome')   // me falta solo este
            if(vetorVazio.includes(editNome)){

            }
            
            
            
            break;
        case 4:
            pesquisaNome = prompt('Pesquisar se um nome está cadastrado')
            if (vetorVazio.includes(pesquisaNome) == true) {
                alert(`O nome ${pesquisaNome} está cadastrado`)
            } else {
                alert(`O nome ${pesquisaNome} NO está cadastrado`) 
            }
            break;
        case 5:
            alert(`Os nomes cadastrados ate agora são ${vetorVazio}`)
            break;
            
        default:
            i = i + 1000;
            alert(`Vc saiou do programa`)   


    }
  }  
  console.log(vetorVazio)

  //HASTA ACA OK







/*5) Uma sorveteria possui um sistema de self-service de
sorvetes no qual o cliente pode montar seu sorvete com
até 4 bolas (sabores). Criar um programa que simule esse sistema.

1- Adicionar sabor
2- Remover sabor
3- Visualizar sorvete
4- Finalizar pedido

======== MENSAGENS e VALIDAÇÕES ========
Opção 1-> “Sabor adicionado!”   OU   “Limite de sabores atingido, remova um sabor!”
Opção 2-> “Sabor removido!”   OU   “Não existem sabores adicionados!”
Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.”   OU   “Seu sorvete não possui sabores!”
Opção 4-> “Pedido realizado!”   OU   “Adicione pelo menos um sabor!”*/







/*6) Você está fazendo um mochilão pela Europa e precisa 
qual a distância que vai percorrer em determinada viagem ou
trecho da viagem, utilizando trem. De Bruxelas até Berlim 
são 764km e de Berlim até Praga são 350km. De Praga até
Viena são mais 292km. De Viena até Budapeste, são outros 242km.
Faça um sistema no qual o usuário digite a cidade de origem,
em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

Bruxelas <-> Berlim = 764km
Berlim <-> Praga = 350km
Praga <-> Viena = 292km
Viena <-> Budapeste = 242km*/