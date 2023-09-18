import { Router } from "express";
import clienteRouter from "./clientRouter";
import produtoRouter from "./produtoRouter";
import compraRouter from "./compraRouter";

const indexRouter = Router()

indexRouter.use(clienteRouter)
indexRouter.use(produtoRouter)
indexRouter.use(compraRouter)

export default indexRouter