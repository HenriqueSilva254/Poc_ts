import db from "database/db"

async function checkUserId(name: string | string[]): Promise<number> {
    const result = await db.query(`SELECT id FROM cliente WHERE name = $1`, [name])
    return result.rows[0]
}

async function checkPrice(name): Promise<number> {
    const result = await db.query(`SELECT price FROM produto WHERE name = $1`, [name])
    return result.rows[0]
}

async function InsertCompra(body) {
    const {clienteId, price, produto} = body
    return await db.query(`INSERT INTO compra ("clienteId", "valorTotal", produtos) VALUES ($1, $2, $3) `, [clienteId.id, price.price, produto])
    
}

export const compraRepository = {InsertCompra, checkPrice, checkUserId} 