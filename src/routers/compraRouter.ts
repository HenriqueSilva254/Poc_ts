import { CreateCompra } from "controllers/compraController";
import { Router } from "express";
import { validateSchema } from "midlleware/validateSchema";

const compraRouter = Router()

compraRouter.post("/compra", CreateCompra)

export default compraRouter