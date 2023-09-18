import { CreateProduto, delProdutos, getProdutos, upProdutos } from "controllers/produtosController";
import { Router } from "express";
import { validateSchema } from "midlleware/validateSchema";
import  { ProdutoSchema, upProdutoSchema } from "schemas/produtoSchema";

const produtoRouter = Router()

produtoRouter.post("/produto", validateSchema(ProdutoSchema), CreateProduto)
produtoRouter.put("/produto", validateSchema(upProdutoSchema), upProdutos)
produtoRouter.get("/produto", getProdutos)
produtoRouter.delete("/produto/:id", delProdutos)

export default produtoRouter