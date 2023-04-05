import listaProdutos from "../database";
import { Produto } from "../types";




function cadastrarProduto(novoProduto: Produto) {
    if (listaProdutos.some((produto) => produto.nome === novoProduto.nome)) {
        console.log("Atenção! Já existe um produto cadastrado com esse nome!");
        return
    }



    listaProdutos.push(novoProduto);
    console.log(`Produto ${novoProduto.nome} cadastrado!`);
    console.log(listaProdutos)
}

export default cadastrarProduto