import listaProdutos from "./database";
import { atualizarProduto, cadastrarProduto, deletarProduto, listarProdutos } from "./produtos";
import { Produto } from "./types";



const produto1: Produto = {
    id: "1122",
    nome: "Mouse Gamer Red Dragon",
    preco: 120,
    categoria: {
        nome: "Perifericos",
        tags: ["NOVOS"]
    },
    quantidade: 15,
    genero: "GAMER"
};

cadastrarProduto(produto1);

atualizarProduto("1122", { preco: 200 })

listarProdutos()