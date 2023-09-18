
export type User = {
    name: string
    password: string | number
}

export type Empresa = {
    name: string
    cnpj: string | number
}

export type Produto = {
    name: string
    price: number
}

export type ApplicationError = {
    name: string;
    message: string;
}

export type updateProduct = {
    productId: string | number 
    newName: string 
    newPrice: string | number 
}

export type cnpj = {
    cnpj: string | number 
}