const pessoa = {
    nome: "Tiago",
    idade: 20,
    usuario: "aluno",
    saudar: function (){
        return "Oi, meu nome é " + this.nome + " e eu sou " + this.usuario + ".";
    }
};
console.log(pessoa.nome);
console.log(pessoa.saudar());

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
    exibirInformacoes(){
        return `Este é um ${this.tipo} chamado ${this.nome}`;
    }
}
const cachorro = new Animal("Duck", "cachorro");
const gato = new Animal("Tom", "gato");
console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());