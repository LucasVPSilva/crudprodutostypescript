import listaProdutos from "../database";

function listarPorPreco(valorMinimo: number, valorMaximo: number) {

    let produtoPrecos;

    for (let index = 0; index < listaProdutos.length; index++) {

        if (listaProdutos[index].preco >= valorMinimo &&
            listaProdutos[index].preco <= valorMaximo) {
            produtoPrecos = listaProdutos[index];
        }

    }

    console.log(produtoPrecos?.nome, produtoPrecos?.preco);




}

export default listarPorPreco