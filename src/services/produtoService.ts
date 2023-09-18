import { notFound } from "error";
import { Produto, cnpj, updateProduct } from "protocols";
import { produtosRepository } from "repository/produtosRepository";

async function createProduto(body: Produto, head: cnpj){
    const empresaId = await produtosRepository.checkEmpresa(head)
    console.log(empresaId)
    return await produtosRepository.insertProdutos(body, empresaId.id)
} 

async function ProdutosList(){
    const result = await produtosRepository.AllProfutos()
    return result
} 

async function updateProdutos(body: updateProduct, head: cnpj){
    
    const empresaId = await produtosRepository.checkEmpresa(head)
    const checkProdutoEmpresa = await produtosRepository.checkEmpresaProduto(body.productId)
    if(empresaId.empresaId !== checkProdutoEmpresa.id) throw notFound(`Voce so pode alterar produtos da sua empresa`)
    const result = await produtosRepository.updateProduct(body)
    return result
} 

async function DeleteProduto(id: string, head: cnpj){
    const empresaId = await produtosRepository.checkEmpresa(head)
    const checkProdutoEmpresa = await produtosRepository.checkEmpresaProduto(id)
    console.log(checkProdutoEmpresa, empresaId)
    if(!checkProdutoEmpresa) throw notFound(`produto nao encontrado`)
    if(empresaId.empresaId !== checkProdutoEmpresa.id) throw notFound(`Voce so pode alterar produtos da sua empresa`)
    return await produtosRepository.Delete(id)
} 

export const produtoService = {createProduto, ProdutosList, updateProdutos, DeleteProduto}