import listaProdutos from "../database";

export const produtosPorTag = (tag: string) => {

    const produtos = listaProdutos.filter(({ categoria }) => {

        return categoria.tags.filter(nameTag => nameTag === tag)


    }


    )
}