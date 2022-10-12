console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

//new Array cria um lista.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada =true;

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos)

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2,1);//removendo um item da lista
}else{
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
