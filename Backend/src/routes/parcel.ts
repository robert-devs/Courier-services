import { Router } from "express";
import { 
    createParcelController, 
    deleteParcel, 
    getAllParcels, 
    getOneParcelController, 
    getParcelsByUserIdController, 
    updateOrders 
} from "../controllers/parcels.controller";

const router = Router()

//create Orders
router.post('/',createParcelController)

//get all Orders
router.get('/',getAllParcels)

//get one Order

router.get('/:id',getOneParcelController)

//order by userId
router.get('/assigned/:id',getParcelsByUserIdController)

//update projects

router.put('/:id',updateOrders)

//delete project

router.delete('/:id',deleteParcel)
export default router