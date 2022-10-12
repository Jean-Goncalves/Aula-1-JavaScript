console.log(`\nTrabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

//new Array cria um lista.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste =false;
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log("Destino existe: ",destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}