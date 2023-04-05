import listaProdutos from "../database";


function listarProdutos() {
    listaProdutos.forEach(element => {
        console.log(`Nome do produto: ${element.nome},
         Preço: ${element.preco}, quantidade em estoque:
         ${element.quantidade}, valor total no estoque:
         ${element.preco * element.quantidade}`)
    })
}

export default listarProdutos;

