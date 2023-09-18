import { ApplicationError } from "protocols"

export function conflict(resource): ApplicationError {
    return {
        name: "conflict", 
        message: resource
    }
}

export function invalid(resource): ApplicationError {
    return {
        name: "invalid", 
        message: resource
    }
}

export function notFound(resource = "Item"): ApplicationError {
    return {
        name: "notFound", 
        message: `${resource} não foi encontrado`
    }
}

