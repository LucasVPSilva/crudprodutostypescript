



interface Produto {
    id: string;
    nome: string;
    preco: number;
    categoria: Categoria;
    quantidade: number;
    genero: Genero
}

interface Categoria {
    nome: string;
    tags: Tag[];
}

type Tag = "BLACKFRIDAY" | "NOVOS" | "USADOS";


type Genero = "ELETRONICOS" | "ELETRODOMESTICOS" | "GAMER";


type AtualizaProduto = Omit<Partial<Produto>, "id" | "nome">;


export { Produto, AtualizaProduto }