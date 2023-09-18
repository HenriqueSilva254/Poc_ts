POST: /user
Body: { "name": "Luzia", "password": "senhalinda" }

POST: /empresa
Body: { "name": "Lanchonete do Juca", "cnpj": "11422000177" }

POST: /produto
Hearder: cnpj: "11422000177"
Body: { "name": "Pastel de Frango", "price": "7,99" }

GET: /produto

PUT: /produto
Hearder: cnpj: "11422000177"
Body: { 
"newName": "Pastel de Frango",
"newPrice": "7,99", 
"productId": "1"}


DELETE: /produto/"x" => id do produto
Hearder:  cnpj: "11422000177"

POST: /compra
Hearder:  name: "Luzia"
Body: { "produto": "Pastel de Frango"}

