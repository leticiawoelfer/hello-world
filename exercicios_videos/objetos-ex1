//exercicio 02
const cartao = {
    nome: "Leticia",
    idade: 26,
    produtosConsumidos: [
        {
            nomeProduto: "agua mineral",
            precoUnit: 600,
            qnt: 2
        },
        {
            nomeProduto: "refrigerante",
            precoUnit: 900,
            qnt: 2
        },
        {
            nomeProduto: "pizza",
            precoUnit: 4990,
            qnt: 1
        }
    ]
}
console.log(cartao);

//exercicio 03
console.log(cartao.nome)
console.log(cartao.idade)
cartao.idade = 30
console.log(cartao.idade)
console.log(cartao.produtosConsumidos[0].nomeProduto)
console.log(cartao.produtosConsumidos[cartao.produtosConsumidos.length - 1].precoUnit)

//exercicio 4
let total = 0
for (let p of cartao.produtosConsumidos) {
    total += (p.precoUnit * p.qnt);
}
console.log(`Cliente ${cartao.nome}, seu total a pagar é de R$${(total / 100).toFixed(2)}`)