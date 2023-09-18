import express, {json} from "express";
import "express-async-errors"
import dotenv from "dotenv"
import { errorHandler } from "midlleware/errosMidlleware";
import indexRouter from "./routers/index";

dotenv.config

const app = express();

app.use(json())
app.use(indexRouter)
app.use(errorHandler)

const port: number = Number(process.env.PORT) || 5000

app.listen(port, ()=>{
    console.log('Servidor rodando na porta:' + port)
})