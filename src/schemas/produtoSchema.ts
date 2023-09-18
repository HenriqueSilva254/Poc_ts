import Joi from "joi";
import { Produto, updateProduct } from "protocols";

export const ProdutoSchema = Joi.object<Produto>({
name: Joi.string().required(),
price: Joi.string().required()
})

export const upProdutoSchema = Joi.object<updateProduct>({
    productId: Joi.string().required(),
    newName: Joi.string().required(),
    newPrice: Joi.string().required()
    })

