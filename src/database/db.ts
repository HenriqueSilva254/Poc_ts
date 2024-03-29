
import { ClientConfig, Pool} from "pg"
import dotenv from "dotenv"
dotenv.config()

const configDatabase: ClientConfig = {
    connectionString: process.env.DATABASE_URL
}

if(process.env.NODE_ENV === "production") configDatabase.ssl = true

const db = new Pool(configDatabase)

export default db