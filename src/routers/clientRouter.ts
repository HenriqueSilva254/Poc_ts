import { clienteControllers } from "controllers/controller";
import { Router } from "express";
import { validateSchema } from "midlleware/validateSchema";
import clientSchema from "schemas/clienteSchema";
import EmpresaSchema from "schemas/empresaSchema";

const clienteRouter = Router()

clienteRouter.post("/user", validateSchema(clientSchema),clienteControllers.CreateUser)
clienteRouter.post("/empresa", validateSchema(EmpresaSchema),clienteControllers.CreateEmpresa)

export default clienteRouter