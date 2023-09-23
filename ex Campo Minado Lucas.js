
let campo = [[],[],[]]
let bomba = 0
let ponto;
let x, y;

for (i = 0; i < 3; i++){

    for (j = 0; j < 3; j++){
        campo[i].push(Math.floor(Math.random()* (2)));
    }
}
console.table(campo)

console.log(campo)

ponto = Number(prompt('Digite a quantidade de pontos minimos para ganhar')); 


let elecciones = [[],[],[]]

for (i = 0; i < 3; i++){
   
    for(j=0; j <3; j++){
        x = Number(prompt('Digite um numero'));     
        elecciones[i].push(x);
    }

}
  console.log(elecciones)   

  
for (i = 0; i < 3; i++){

    for(j=0; j < 3; j++){

        if (campo[i][j] == 1 && elecciones[i][j] == 1 ){
            bomba++
        }    
        if (campo[i][j] == 0 && elecciones[i][j] == 0 ){
            bomba++
        }    
    }
}

if (bomba >= ponto) {
   alert('você ganho')
} else {
   alert('você perdeu')
}

console.log(bomba)
console.log(ponto)
