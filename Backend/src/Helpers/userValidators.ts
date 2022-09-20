import Joi from "joi";

enum UserRole{
    admin="admin",
    user="user",
}
    
export const registerUserSchema = Joi.object({
    address: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    name: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().max(10).required(),
    // role: Joi.string().valid(...Object.values(UserRole)).required(),
})


export const loginUserSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(8).required(),
})
export const updateUserSchema = Joi.object({
    address: Joi.string().min(3).max(30).required(),
    // address: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().min(5).required(),
    phone: Joi.string().max(10).required(),
})

