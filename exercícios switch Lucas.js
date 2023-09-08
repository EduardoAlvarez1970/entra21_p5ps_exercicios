/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente      D) Sair

Mostrar mensagens para cada opção!*/

let acesso = prompt('Para falar com a atendente, digite opção A' + "<br>" + 
'Para falar com o RH, digite opção B' + "<br>" + 
'Para falar com o gerente, digite a opção C' + "<br>" +
'Para salir, digite qualquer outra letra').toUpperCase();

switch(acesso) {
    case 'A':
        alert('Falar com a atendente ')
        break;
    case 'B':
        alert('Falar com o RH ')
        break;
    case 'C':
        alert('Falar com o gerente ')
        break;
    default:
        alert('Sair')
    }

/*2) Criar um programa onde o usuário digite a sua data de nascimento
 e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)*/

let dataNascimento = Number(prompt('Digite a sua data de nascimento'));

switch(true) {
    case (dataNascimento <= 1945):
    alert('Sem Geração')
    break;
    
    case (dataNascimento >= 1946 && dataNascimento < 1965):
    alert('Baby Boomers')
    break;

    case (dataNascimento >= 1965 && dataNascimento < 1981):
    alert('Geração X')
    break;

    case (dataNascimento >= 1981 && dataNascimento < 1997):
    alert('Geração Y ou Millennials ')
    break;

    case (dataNascimento >= 1997 && dataNascimento < 2011):
    alert('Geração Z')
    break;

    default :
    alert('Geração Alfa')

}

/*3) Criar um programa que informa quantos dias tem
determinado mês (desconsiderando ano bissexto) do ano.
Deve ser perguntado ao usuário o mês e a resposta deve
ser numérica. Exemplo: Usuário digitou 3, que corresponde
a março. Mostrar na tela "O mês possui 31 dias".*/

let digiteMes = Number(prompt('Digite o numero de mes de 1 a 12'));

switch(digiteMes) {
    case 11:
    case 4:
    case 6:
    case 9:
    alert('O mes possui 30 dias')
    break;

    case 2:
    alert('O mes possui 28 dias')
    break;

    default :
    alert('O mes possui 31 dias')
}

/*4) Desenvolva um programa que pergunte ao usuário o número
 da sua conta bancária e o tipo de operação a ser realizada:
1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque,
perguntar o valor a ser depositado ou sacado e mostrar o saldo
atualizado na tela. Na opção saldo, apenas mostrar o saldo atual
na tela. Considere que um saque só pode ser realizado caso haja
saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.*/


let numeroConta = Number(prompt('Digite o numero da sua conta bancaria'));
let tipoOperação = Number(prompt('Digite 1 para saldo; 2 para depósito; 3 para saque'));

var deposito = 0;
var saque = 0;

var saldoInicial = 2000;
var saldoAtualizado = (saldoInicial + deposito) - saque;

switch(tipoOperação) {
    case 2:
    saldoAtualizado = saldoAtualizado + Number(prompt('Digite valor a depositar'))
    alert('Saldo atual: ' + ' ' + saldoAtualizado)
    break;

    case 3:
    saldoAtualizado = saldoAtualizado - Number(prompt('Digite valor a sacar'))
    if(saldoAtualizado < 0) {
        alert('Operação invalida, saldo insuficiente!!')
    } else {
    alert('Saldo atual: ' + ' ' + saldoAtualizado)
    }
    break;

    default:
    alert('o saldo atual e ' + ' ' + saldoAtualizado)
}


/*5) Em um determinado e-commerce, o frete para produtos possui
o valor fixo de R$12,50. A loja possui benefícios para assinantes
em três categorias: 1) Assinante Premium, ganha 20% de desconto
e frete grátis 2) Assinante Gold, ganha 20% de desconto mas
paga frete 3) Assinante Silver, ganha 10% de desconto mas 
paga frete. 4) Não assinante, sem benefícios. Faça um programa
que solicite o valor da compra e a categoria de assinante
(1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo
com a opção escolhida.*/


let valorFixoFrete = 12.50;
let valorCompra = Number(prompt('Digite o valor da compra'));
let categoriaAssinante = Number(prompt('Categoria assinante?' + ' ' + '(1, 2, 3 ou 4)'));

let assPremium = valorCompra - (valorCompra * (20 / 100));
let assGold = valorCompra - (valorCompra * (20 / 100)) + valorFixoFrete;
let assSilver = valorCompra - (valorCompra * (10 / 100)) + valorFixoFrete;
let naoAssinante = valorCompra;

switch(true) {
    case (categoriaAssinante == 1):
        alert('O valor da sua compra é ' + ' ' + assPremium)
        break;

    case (categoriaAssinante == 2):
        alert('O valor da sua compra é ' + ' ' + assGold)
        break;

    case (categoriaAssinante == 3):
        alert('O valor da sua compra é ' + ' ' + assSilver)
        break;

    default:
        alert('O valor da sua compra é ' + ' ' + naoAssinante)
        break;
}

/*6) Numa competição de arremesso de peteca, o competidor
tem direito a 3 arremessos para que a peteca caia em um 
alvo com áreas e pontuações de 0 a 5, sendo 5 no centro
e 0 fora do alvo. Faça um programa que pergunte a pontuação
de cada arremesso e ao final mostre o resultado (soma dos pontos)
e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa),
de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).*/

let arrUm = Number(prompt('Digite a pontoação de 0 a 5 do primer arremesso'));
let arrDois = Number(prompt('Digite a pontoação de 0 a 5 do segundo arremesso'));
let arrTres = Number(prompt('Digite a pontoação de 0 a 5 do tercer arremesso'));

let resultado = arrUm + arrDois + arrTres;

alert(resultado);

switch(true) {
    case (resultado == 15):
        alert('Deus da peteca')
        break;

    case (resultado >=10 && resultado < 15):
        alert('Petequeiro profissa')
        break;

    case (resultado >=5 && resultado < 10):
        alert('Petequeiro de final de semana')
        break;

    case (resultado >= 1 && resultado < 5):
        alert('Pseudo-petequeiro')
        break;

        default: 
        alert('nunca petequeiro')

}






