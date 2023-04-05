import listaProdutos from "../database";
import { Produto } from "../types";


function listarProdutosCategoria(produto: any) {


    listaProdutos.forEach(element => {
        if (element.categoria.nome === produto) {
            console.log(element.nome, element.quantidade);

        } else {
            console.log("Produto não encontrado!")
        }



    })


}


export default listarProdutosCategoria;

