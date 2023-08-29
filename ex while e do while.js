/*1) Supondo que a população de um país A seja da ordem de 80.000 habitantes
com uma taxa anual de crescimento de 3% e que a população de B seja 200.000
habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule
e escreva o número de anos necessários para que a população do país A ultrapasse
ou iguale a população do país B, mantidas as taxas de crescimento.*/

let populaçãoA = 80000;
let taxaAnualA = 3 / 100; 

let populaçãoB = 200000;
let taxaAnualB = 1.5 / 100;

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
    
    if(contador > 1 && contador < numero) {
        
      if (numero % contador == 0)
        primo = false
    }
    
 contador++               
} 
  
if(primo) {
    alert("E primo")
  } else alert("nao e primo")

/*Depois implemente um laço de repetição para solicitar cinco números inteiros e mostre
na tela se são primos ou não.*/

let counter = 1;
while (counter < 6) {

  let numero = Number(prompt('digite um numero'))
  let primo = true;
  let contador = 0;

while (contador <= numero) {

  if (numero == 0 || numero == 1) {
      primo = false
    }                                      
  
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

// usuário digita o último número da sequência
let numeroFinal = Number(prompt("Digite um número para criação da lista : "))

//A sequência começa com 2 pq é o primeiro número primo. 
//Caso comecemos com 1 provavelmente a verificação daria erro pois todos seriam considerados não primo

let numeroAtual = 2;


// iteração para a sequência inicial com a final ( isto é devemos iterar até atingir o numero final da lista)
while (numeroAtual <= numeroFinal) {

    //defino que todos os números são primos até uma certa condição.
    let ehPrimo = true;
    
    // defino um divisor para verificar se é primo
    let divisor = 2


    // verificação se é primo - mudar o valor da variável boleana
 do {

    // pegamos o numero atual da sequência e dividimos pelo divisor, se o resto for igual a zero, eles são divisíveis então não é primo
    if (numeroAtual % divisor === 0) {

        ehPrimo = false;
        break;
    }

    //incrementamos o divisor para um novo divisor ( 2->3 -> 4 ...)
    divisor++
    
    // uma condição para continuar a executar este código, quando o divisor for menor que o número atual /2
    // ( não precisamos verificar nenhum número que seja maior do que a metade do número atual, 
    //pois qualquer divisor que seja maior que a metade do numero atual resultaria em uma quociente menor que 2 )
    // todos os núemros pares são divisíveis por 2 e o 2 é uma exceção pq é um primo par.
 
} while (divisor <= numeroAtual / 2);

 if (ehPrimo) {
    alert (`Esses número são primos : ${numeroAtual}`)
    console.log(numeroAtual)
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

let nomeVinilo = prompt('Digite o nome do vinilo');
let valorVinilo = prompt('Digite o valor do vinilo');

let gastoParcial = 0;
let gastoTotal = gastoParcial + valorVinilo;


//let restoDinheiro = orçamento - gastoTotal;//

//let totalVinilos;//
//let mediaPrecioVinilos = gastoTotal / totalVinilos;//

//let maisCaro;//
//let maisBarato;//

while (gastoTotal <= orçamento) {
     
    if (gastoTotal > orçamento) {
        break;
    }
   gastoTotal++
}







/*5) Santa Catarina é conhecida por suas quatro estações bem definidas,o que o 
torna um estado com alta amplitude térmica (diferença entre
a maior e a menor temperatura, registrada em um período). O INMET,
Instituto Nacional de Meteorologia, pretende ter os dados de amplitude
térmica de uma cidade ou estado. Desenvolva um programa que calcule e
mostre os dados diários (segunda à sexta) e a média de amplitude térmica
semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade
ou estado, perguntar para os cinco dias da semana a maior temperatura do dia
e a menor. Mostrar as amplitudes de cada dia e a média.*/

let estado = prompt('Escolha o nome do estado');

do {
   let maiorTemp = prompt('Digite a Maior temperatura');
   let menorTemp = prompt('Digite a Menor temperatura');
}




while(diaSemana < 5) {

   alert('A maior e..' + ' ' + maiorTemp + ' ' + 'e a menor e...' + ' ' + menorTemp);

}









/*6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada
na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de
'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o
usuário deve digitar o tempo total do projeto em dias e o período das sprints.
Após calculado o número de sprints (média), arredondando o número para baixo,
cadastrar para cada sprint um título e um objetivo.*/




/*7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é 
o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar
um sistema simples de jogo, onde no início é solicitado o número de jogadores
e para cada jogador deve-se armazenar valores de quatro jogadas de um D20.
A pontuação do jogador é definida excluindo o primeiro e o último valor,
somando então os valores da segunda e terceira jogadas. Ao final mostrar
a soma de cada jogador e suas posições. (DESAFIO: validar os valores de 
1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos 
valores do dado, repetir a pergunta)*/




/*8) Na maioria das linguagens de programação, é possível contar caracteres
de uma string (palavra, frase, etc). Criar um sistema no qual o usuário 
digite 5 palavras e ao final mostre o tamanho em número de caracteres,
de cada uma delas. (Pesquisar sobre o comando length, para solução).*/




/*9) Um determinado restaurante trabalha com limite de lotação de 50 
pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar
seu atendimento antes do horário por falta de insumos para produção
das refeições. Criar um programa que receba os dados da quantidade
de pessoas que chegam ao restaurante (repetidamente) e se os insumos
estão "ok" ou "insuficientes". Caso alguma das duas possibilidades
aconteça, encerrar o programa e mostrar ao final o motivo do encerramento 
(atingiu limite de pessoa ou faltaram insumos).*/