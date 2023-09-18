import { Request, Response } from "express-serve-static-core"
import { postEmpresaService, postUserService } from "services/clientService"

export async function CreateUser(req: Request, res: Response){
    await postUserService(req.body)
    res.sendStatus(200)
}

export async function CreateEmpresa(req: Request, res: Response){
    await postEmpresaService(req.body)
    res.sendStatus(200)
}

export const clienteControllers = {CreateUser, CreateEmpresa} 
