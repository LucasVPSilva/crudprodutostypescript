import listaProdutos from "../database";
import { Produto } from "../types";

function deletarProduto(id: string): string | Produto[] {
    const indexProduto = listaProdutos.findIndex((produto) => produto.id === id);
    if (indexProduto === -1) {

        return "Nenhum produto encontrado"
    }

    listaProdutos.splice(indexProduto, 1);

    return listaProdutos

}

export default deletarProduto;