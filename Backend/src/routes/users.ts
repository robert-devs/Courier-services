import { Router } from "express";
import { deleteUser, getOneUser, getUsers, loginUserController, registerUserController, updateUser,  } from "../controllers/users.controller";




const router = Router()

// Login User
router.post('/login', loginUserController)

//get singleUser
router.get('/:id',getOneUser)

//Register user
router.post('/register', registerUserController)

//
router.get('/',getUsers)

// Update User
router.put('/:id',updateUser)

// Delete User
router.delete('/:id',deleteUser)

export default router