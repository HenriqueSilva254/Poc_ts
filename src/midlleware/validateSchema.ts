import { NextFunction, Request, Response } from "express";

export function validateSchema(schema) {
    return (req: Request, res: Response, next: NextFunction) => { 
  
      const validation = schema.validate(req.body);
      if (validation.error) {
        console.log(validation.error.details)
        return res.sendStatus(422);
      }
      
      next();
    }
  }