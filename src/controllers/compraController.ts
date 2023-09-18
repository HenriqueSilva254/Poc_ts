import { Request, Response } from "express"
import { compraService } from "services/compraService"


export async function CreateCompra(req: Request, res: Response){
    await compraService(req.body.produto, req.headers.name) 
    res.sendStatus(200)
}