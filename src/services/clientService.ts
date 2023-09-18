import { Empresa, User } from "protocols";
import { insertEmpresa, insertUser } from "repository/clientRepository";

export async function postUserService(body: User){
    return await insertUser(body)
} 

export async function postEmpresaService(body: Empresa){
    return await insertEmpresa(body)
} 