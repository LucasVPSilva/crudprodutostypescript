import listaProdutos from "../database";
import { AtualizaProduto } from "../types";


function atualizarProduto(id: string, alteraProduto: AtualizaProduto) {
    const indexProduto = listaProdutos.findIndex((produto) => produto.id === id);
    if (indexProduto === -1) {
        console.log("Nenhum produto encontrado")
    }


    const produtoAnterior = listaProdutos[indexProduto]

    listaProdutos[indexProduto].preco = alteraProduto.preco ?? produtoAnterior.preco
    listaProdutos[indexProduto].categoria.nome = alteraProduto.categoria?.nome ?? produtoAnterior.categoria?.nome
    listaProdutos[indexProduto].categoria.tags = alteraProduto.categoria?.tags ?? produtoAnterior.categoria?.tags


    console.log(listaProdutos)


}

export default atualizarProduto