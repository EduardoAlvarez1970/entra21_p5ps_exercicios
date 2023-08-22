/* 1) Crie um programa que peça ao usuário para digitar 
três notas individualmente (uma por vez), faça a média e
caso a média seja igual ou maior que 7, mostre uma mensagem
"Aprovado!" e a média. Caso seja menor que 7, mostre uma
mensagem "Reprovado!" e a média. */

let n1 = parseInt(prompt('digite a primera nota'));
let n2 = parseInt(prompt('digite a segunda nota'));
let n3 = parseInt(prompt('digite a tercera nota nota'));

let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
    alert('aprovado!')
} else {
    alert('Reprovado!')
}

/* 2) Faça um programa para ler o salário anual de um funcionário e 
o piso salarial mensal da sua categoria. Mostrar o salário mensal do
funcionário e dizer se ele recebe de acordo com o piso (salário mensal
igual ou maior que o piso da categoria) ou se recebe abaixo do piso. */

let salarioAnual = parseInt(prompt('digite o seu salario anual'));
let pisoMensal = parseInt(prompt('digite o seu piso mensal'));

alert(' o seu salario anual e ' + ' ' + salarioAnual + ' ' + 'e sua media mensal e ' + ' ' + pisoMensal);
 if ((salarioAnual / 12) >= pisoMensal) {
    alert ('voce recebe de acordo com o piso')
 } else {
    alert('voce recebe abaixo do piso')
 }


 /* 3) Criar um programa que pergunte o nome e a idade
da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem 
"Pode se vacinar!" caso a idade seja maior ou igual a 60 ou
tenha comorbidade. Caso contrário, mostrar mensagem 
"Não pode se vacinar!". */

 let nome = prompt('digite seu nome');
 let idade = parseInt(prompt('digite a sua idade'));
 let comorbidade = prompt('tem comorbidade');

 

 if (idade >= 60 || comorbidade == 's') {
    alert(nome + ' ' + 'Pode se vacinar');
 } else {
    alert(nome + ' ' + 'Não pode se vacinar')
 }

 /*4) Programar para que o usuário digite um número.
Caso seja par, mostre "O número é par!", senão,
mostre "O número é ímpar!" */

 let numero = parseInt(prompt('digite um numero'));

 if(numero % 2 == 0) {
    alert ('o numero e par')
 } else {
    alert('o numero e impar')
 }

 /*5) Fazer um programa no qual o usuário digite a sua
altura e o seu peso, ao final mostre o IMC (índice de
massa corporal) e uma mensagem se está abaixo do peso
(IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25)
ou acima do peso (IMC maior 25). IMC = peso / (altura * altura). */

 let peso = parseInt(prompt('digite seu peso'));
 let altura = parseFloat(prompt('digite sua altura'));
 let imc = peso / (altura * altura);

 alert(' o seu IMC e' + ' ' + imc);
  if (imc < 18) {
    alert('voce esta abaixo do peso');
  } else if (imc >= 18 && imc <= 25) {
    alert('voce esta na faixa do peso ideal');
  } else {
    alert('voce esta acima do peso ideal')
  }

  /* 6) Desenvolva um programa no qual o usuário deve digitar o nome
   e a idade de 5 pessoas. Ao final mostrar a média de idade delas e 
   a maior idade dentre essas pessoas. */

   let nome1 = (parseInt(prompt('digite o nome da pessoa 1')));
   let idade1 = (parseInt(prompt('digita a idade da pessoa 1')));
   let nome2 = (parseInt(prompt('digite o nome da pessoa 2')));
   let idade2 = (parseInt(prompt('digita a idade da pessoa 2')));
   let nome3 = (parseInt(prompt('digite o nome da pessoa 3')));
   let idade3 = (parseInt(prompt('digita a idade da pessoa 3')));
   let nome4 = (parseInt(prompt('digite o nome da pessoa 4')));
   let idade4 = (parseInt(prompt('digita a idade da pessoa 4')));
   let nome5 = (parseInt(prompt('digite o nome da pessoa 5')));
   let idade5 = (parseInt(prompt('digita a idade da pessoa 5')));

   let idadeMedia = alert('a idade media é...' + ' ' + ((idade1 + idade2 + idade3 + idade4 + idade5) / 5));

   alert('a maior idade entro todas as pessoas é...' + ' ' + Math.max(idade1, idade2, idade3, idade4, idade5));

   /*7) Criar um programa que simule o login de um roteador. O nome de usuário
    (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar
    username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!",
    caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username,
    de password ou de ambos).  */

    let username = 'admin';
    let senha = '123';

    let loginUsername = prompt('digite o seu nome de usuario');
    let loginSenha = prompt('digita a sua senha');

    if(username == loginUsername && senha == loginSenha) {
        alert('Login efetuado!!');
    } else if (username == loginUsername && senha != loginSenha) {
        alert('a senha não é a correta');
    } else if(username != loginUsername && senha == loginSenha) {
        alert('o user name está errado')
    } else {
        alert('o login falhou')
    }
/* 8) Elaborar um programa que alerte sobre
os riscos de animais em extinção. O usuário deve
digitar o nome da espécie e a sua população (total de indivíduos).
Populações entre 200 e 500 indivíduos, são classificadas como 
"Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos,
são classificadas como "Espécie em perigo" e populações entre 1000 e 5000
indivíduos, são classificadas como "Espécie vulnerável!"*/

let nomeEspecie = prompt('digite o nome da especie');
let população = parseInt(prompt('digite a população'));

if (população >= 200 && população <= 500) {
    alert('Espécie criticamente em perigo')
} else if (população > 500 && população <= 1000) {
    alert('Espécie em perigo');
} else if (população > 1000 && população < 5000) {
    alert ('Espécie vulnerável!')
} else {
    alert('essa especie não esta em perigo')
}

/*9) Criar um programa para calcular a densidade
demográfica (habitantes por quilômetro quadrado)
de uma região. Sendo, densidade igual a população
(total de habitantes) dividida pela área (metros quadrados).
Mostrar mensagens para densidade alta (maior ou igual a 100),
média (entre 25 e 100), baixa (menor que 25).*/


let habitantes = parseInt(prompt('digite a cantidade de habitantes'));
let área = parseFloat(prompt('digite a área en m2'));
let densidade = parseFloat(habitantes / área);

if (densidade >= 25 && densidade < 100) {
    alert('Densidade MÈDIA');
} else if (densidade < 25) {
    alert('Densidade BAIXA')
} else {
    alert('Densidade ALTA')
}


/*10) O CETAS (Centro de Triagem de Animais Silvestres)
está com processo seletivo de integrantes para as suas equipes.
Criar um sistema que receba os dados dos candidatos (nome, idade,
formação e cidade) para sinalizar se eles podem concorrer às vagas.
Após receber os dados, mostrar o nome do candidato e mensagem para
qual tipo de vaga o candidato está apto a concorrer. Caso não
esteja apto a concorrer a nenhuma das duas categorias de vagas,
mostrar mensagem de "Não apto a concorrer".

Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos,
possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos,
possuir formação em "Veterinária" e residir em Florianópolis.*/

let nomeCandidato = prompt('Digite seu nome');
let idadeCandidato = parseInt(prompt('Digite sua idade'));
let formaçãoCandidato = prompt('Digite sua formação');
let cidadeCandidato = prompt('Digite onde mora');

if (idadeCandidato >= 25 && idadeCandidato <= 50 && formaçãoCandidato == 'biologia' || formaçãoCandidato == 'ecologia' && cidadeCandidato == 'florianopolis') {
    alert(nomeCandidato + ' ' + 'voce está apto para concorrer a vaga de Resgate');
} else if (idadeCandidato >= 22 && idadeCandidato <= 60 && formaçãoCandidato == 'veterinaria' && cidadeCandidato == 'florianopolis' ) {
    alert(nomeCandidato + ' ' + 'voce está apto para concorrer a vaga de Tratamento'); 
}
 else {
    alert('Não apto a concorrer')
}

   






