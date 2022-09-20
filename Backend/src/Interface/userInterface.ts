
import { Request } from "express"


export interface user{
    id?:string
    name:string
    email:string
    role:string
    phone:string
    password:string
    address:string
    destination?:string
    datetime?:string
}
export interface ExtendedUserRequest extends Request{
    body:user
}


export    interface ExtendsRequest extends Request{
    body: {
        name:string,
        destination: string,
        userId: string,
        price:string
        weight:string
        address:string
        datetime: string
        
    }
}