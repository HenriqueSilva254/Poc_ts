import db from "database/db";
import { Empresa, User } from "protocols";

export async function insertUser(body: User){
const {name, password} = body
return await db.query<User>(`INSERT INTO cliente (name, password) VALUES ($1, $2)`, [name, password])
} 

export async function insertEmpresa(body: Empresa){
    const {name, cnpj} = body
    return await db.query<Empresa>(`INSERT INTO empresa (name, cnpj) VALUES ($1, $2)`, [name, cnpj])
} 
    
    