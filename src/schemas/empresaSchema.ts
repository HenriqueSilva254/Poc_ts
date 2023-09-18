import Joi from "joi";
import { Empresa } from "protocols";

const EmpresaSchema = Joi.object<Empresa>({
name: Joi.string().required(),
cnpj: Joi.number().required()
})

export default EmpresaSchema