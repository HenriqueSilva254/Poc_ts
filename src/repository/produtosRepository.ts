import db from "database/db";
import { Empresa, Produto, cnpj, updateProduct } from "protocols";

async function insertProdutos(body: Produto, id: number) {
  const { name, price } = body;
  return await db.query<Produto>(
    `INSERT INTO produto (name, price, "empresaId") VALUES ($1, $2, $3)`,
    [name, Number(price), id]
  );
}

async function checkEmpresa(head: cnpj) {
  const result = await db.query(`SELECT id FROM empresa WHERE cnpj = $1`, [
    head.cnpj,
  ]);
  return result.rows[0];
}

async function checkEmpresaProduto(body: string | number) {
  
  const result = await db.query(`SELECT "empresaId" FROM produto WHERE id = $1`, [body]);
  return result.rows[0];
  
}

async function AllProfutos() {
  const result = await db.query(`SELECT p.id AS NumeroDesteProduto, p.name AS produto, p.price AS price, e.name AS empresa FROM produto p
  INNER JOIN empresa e ON p."empresaId" = e.id`,);
  return result.rows;
}

async function updateProduct(body: updateProduct) {
  const {productId, newName, newPrice} = body
  return await db.query(` UPDATE produto SET name = $2, price = $3 WHERE id = $1`, [productId, newName, newPrice]);
}

async function Delete(id) {
  return await db.query(` DELETE FROM produto WHERE id = $1`, [id]);
}


export const produtosRepository = {updateProduct, AllProfutos, checkEmpresa, insertProdutos, checkEmpresaProduto, Delete}