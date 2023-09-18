import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "protocols";

export function errorHandler(error: ApplicationError | Error, req: Request, res: Response, next: NextFunction) {
    if(error.name === "notFound") {
        return res.status(400).send(error.message)
    }

    console.log(error.message)
    return res.status(500).send("Internal server error")
}