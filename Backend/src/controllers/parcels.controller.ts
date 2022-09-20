
import { sqlConfig } from "../config";
import { ExtendsRequest } from "../Interface/userInterface"
import mssql, { VarChar } from 'mssql'
import { createParcelsSchema,  updateParcelSchema, } from "../Helpers/parcelValidators";
import{Request,RequestHandler,Response} from 'express'
import{v4 as uid}from 'uuid'




export const createParcelController = async(req:ExtendsRequest,res:Response)=>{
      try {
        const pool= await mssql.connect(sqlConfig)
      
        // Validate REQ BODY (JOI)
         const {error} = createParcelsSchema.validate(req.body);
        if(error){
            return res.status(400).send({message: error?.details[0].message})
        }
        
        //validate if userId exist
         const result = await pool
                .request()
                .input("id", req.body.userId)
                .execute("getUserById")
        const{recordset} = result

        if(recordset.length === 0){
            return res.status(404).send({message: "user with given id not found"})
        }

        const id = uid()
        const {name,userId,destination,price,weight,address,datetime} = req.body
        
        // Ensure location is like  "lat, long" - separated by comma
        const dest = req.body.destination.split(",")
        if(dest.length !== 2){
            return res.status(400).send({message: "Invalid Destination should be like 'lat, long'"})
        }
        
       await pool.request()
        .input('id',mssql.VarChar,id)
        .input('name',mssql.VarChar,name)
        .input('destination',mssql.VarChar,destination)
        .input('weight',mssql.VarChar,weight)
        .input('price',mssql.VarChar,price)
        .input('address',mssql.VarChar,address)
        .input('userId',mssql.VarChar,userId)
        .input('datetime',mssql.VarChar,datetime)
        .execute('createParcel')
            
        // Get Created project
        const parcelResults = await pool
                .request()
                .input("id", id)
                .execute("getParcelById")
        const parcel = parcelResults.recordset[0]
        
        res.send({message: "parcel created succefully",  parcel, success: true})
        
    } catch (error:any) {
        res.status(500).send({message:"Internal Server Error: "+ error.message,  success: false})
        
    }
}

export const getAllParcels = async(req:Request,res:Response)=>{
   try {
      
       const pool= await mssql.connect(sqlConfig)
       let orders = await (await pool.request().execute('getAllParcels')).recordset
         const parcels = orders
        
       res.json(parcels)
    } catch (error:any) {
        res.json({error})
        
    }
}

export const getOneParcelController:RequestHandler<{id:string}> = async(req,res)=>{
    
        try {
        
       
            const id = req.params.id
            const pool= await mssql.connect(sqlConfig)
           const orders = await pool.request()
           .input('id',mssql.VarChar,id)
           .execute('getParcelById')
            const{recordset} = orders
            
            if(!orders.recordset[0]){
                 return res.status(404).send({message:`parcel with id '${id}' not found`})
            }
           res.send({parcel:recordset[0]})
        } catch (error:any) {
             res.status(500).send({message:"Internal Server Error: "+ error.message})
        }  
}

export const getParcelsByUserIdController:RequestHandler<{id:string}> = async(req,res)=>{
    
        try {
        
            const id = req.params.id
            const pool= await mssql.connect(sqlConfig)
           const orders = await pool.request()
           .input('userId',mssql.VarChar,id)
           .execute('getParcelsByUserId')
            const{recordset} = orders
    
           res.send({parcels:recordset, success: true})
        } catch (error:any) {
            res.status(500).send({message:"Internal Server Error: "+ error.message,  success: false})
        }  
}

export const updateOrders:RequestHandler<{id:string}>=async(req,res)=>{
    try {
          // Validate REQ BODY (JOI)
             const {error} = updateParcelSchema.validate(req.body);
            if(error){
                return res.status(400).send({message: error?.details[0].message, success: false})
            }

        const id = req.params.id
        const pool= await mssql.connect(sqlConfig)
        const{name,destination,userId,weight,address,price,datetime }= req.body as{
            name:string,
            weight:string,
            address:string,
            price:string,
            destination: string,
            userId: string,
            datetime: string
        }
        const projects = await pool.request()
           .input('id',mssql.VarChar,id)
           .execute('getParcelById')
            if(!projects.recordset[0]){
                return res.json({message: `Parcel with id ${id} not found`})
            }
        await pool.request()
            .input('id',mssql.VarChar,id)
            .input('name',mssql.VarChar,name)
            .input('weight',mssql.VarChar,weight)
            .input('price',mssql.VarChar,price)
            .input('address',mssql.VarChar,address)
            .input('destination',mssql.VarChar,destination)
            .input('datetime',mssql.VarChar,datetime)
            .execute('updateParcel')

        res.json({message:"project updated"})
    } catch (error:any) {
        res.status(500).send({message:"Internal Server Error: "+ error.message,  success: false})
        
    }
}

export const deleteParcel:RequestHandler<{id :string}> =async(req,res)=>{
    try {
        const id = req.params.id
        const pool= await mssql.connect(sqlConfig)


        const orders = await pool.request()
           .input('id',mssql.VarChar,id)
           .execute('getParcelById') 

        if(!orders.recordset[0]){
                return res.status(404).send({message:`parcel with id '${id}' not found`, success: false})
        }

        await pool.request()
           .input('id',mssql.VarChar,id)
           .execute('deleteParcel') 

        res.json({message:'Parcel deleted', success: true})
    } catch (error:any) {
        res.status(500).send({message:"Internal Server Error: "+ error.message,  success: false})
    }
}