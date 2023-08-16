let valorCompra = 100
let numParcelas = 12
//a vista 10% desconto
//parcelado em até 6x sem juros mas sem o desconto

if (numParcelas == 1) {
    console.log("Total da compra: de R$" + valorCompra.toFixed(2) + " por R$" + (valorCompra - (valorCompra * 0.1)).toFixed(2) + " com 10% OFF a vista!")
} else if (numParcelas <= 6 && numParcelas != 0) {
    let parcela = (valorCompra / numParcelas).toFixed(2)
    console.log(`Total da compra: ${numParcelas}x de R$${parcela} sem juros!`)

} else if (numParcelas <= 12) {
    const taxa = 1
    let m = (valorCompra * (1 + (taxa / 100)) ** numParcelas).toFixed(2)
    let parcela = (m / numParcelas).toFixed(2)
    console.log(`Total da compra: ${numParcelas}x de R$${parcela} com juros de ${taxa}% ao mês! Total R$${m}`)
} else {
    console.log("Você precisa escolher uma quantidade de parcelas entre 1 e 12.")
}

//modificação do exercicio 2 junto aqui