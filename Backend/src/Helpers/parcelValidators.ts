import Joi from "joi"

export const createParcelsSchema =Joi.object({
    Uname:Joi.string().min(5).required(),
    userId:Joi.string().required(),
    destination:Joi.string().required(),
    datetime:Joi.string().required(),
    address:Joi.string().required(),
    price:Joi.string().required(),
    weight:Joi.string().required()
})
export const updateParcelSchema =Joi.object({
    Uname:Joi.string().min(5).required(),
    weight:Joi.string().required(),
    address:Joi.string().required(),
    price:Joi.string().required(),
    destination:Joi.string().required(),
    datetime:Joi.string().required(),
    status: Joi.string().required()
})