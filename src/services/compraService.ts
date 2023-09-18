import { compraRepository } from "repository/compraRepository";

export async function compraService(body: string, name: string | string[]){
    const price: number = await compraRepository.checkPrice(body)
    const clienteId: number = await compraRepository.checkUserId(name)

    const objBody = {
        price,
        clienteId,
        produto: body
    }

   return await compraRepository.InsertCompra(objBody)
} 
