function exibirDetalhesProduto(){
    return `Produto ${Produto.nome}, Preço: R$${Produto.preco.toFixed(2)},
    estoque: ${Produto.estoque} unidade. `;
}

const Produto = {
    nome: "Iphone 19",
    preco: 10.000,
    estoque: 4
};

console.log(exibirDetalhesProduto(Produto));

//ForEach
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});

const dobrados = numeros.map(num => num*2);
console.log(dobrados);