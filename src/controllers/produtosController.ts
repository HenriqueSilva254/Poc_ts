import { Request, Response } from "express"
import { number, string } from "joi"
import { cnpj, updateProduct } from "protocols"
import { produtoService } from "services/produtoService"

export async function CreateProduto(req: Request, res: Response){
    
    await produtoService.createProduto(req.body, req.headers as cnpj)
    res.sendStatus(200)
}

export async function getProdutos(req: Request, res: Response){
    const result = await produtoService.ProdutosList()
    res.send(result).status(200)
}

export async function upProdutos(req: Request, res: Response){
    await produtoService.updateProdutos(req.body as updateProduct, req.headers as cnpj)
    res.sendStatus(200)
}

export async function delProdutos(req: Request, res: Response){
    const {id} = req.params
    await produtoService.DeleteProduto(id as string, req.headers as cnpj)
    res.sendStatus(200)
}
