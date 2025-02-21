//Exemplo 1: Variaveis ( var, let e const )

// Usando var ( escopo global/função )
var nome = "Tiago";
console.log(nome);
if(true){
    let nome = "Maria";
    console.log(nome); //Maria
}
console.log(nome);


//let
let idade = 20;
console.log(idade)
if(true){
    let idade = 10;
    console.log(idade)
}
idade = "Tiago";
console.log(idade);

//Const
const PI = 3.14;
console.log(PI)
if(true){
    const PI = 3.14159;
    console.log(PI);
}

console.log(PI);