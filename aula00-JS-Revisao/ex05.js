const cores = ['vermelho', 'verde', 'azul'];
for(const cor of cores){
    console.log(cor);
}

const pessoa = {
    nome: "Arthur",
    idade: 34,
    usuario: "Professor"
};

for(const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
};

//map
const mapa = new Map();
mapa.set('nome', 'Layla');
mapa.set('idade', 34);
console.log(mapa.get('nome'));
console.log(mapa.get('idade'));

wekmap
const obj = {id: 1}
const wekmap = new wekMap();

wekmap.set(obj, 'aluno 1');
