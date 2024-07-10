import { Router } from "express"
import { body } from "express-validator"
import { createProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"


const router = Router()

//Routing

router.get('/', (req,res) => {
    res.json('desde get')
})

router.post('/', 
        
    //Validation
    body('name')
        .notEmpty().withMessage('Name is required'),
    body('price')
        .isNumeric().withMessage('Data not valid')
        .notEmpty().withMessage('Price is required')
        .custom((value) => value > 0).withMessage('Price should be more than 0'),

    handleInputErrors,
    
    createProduct)


router.put('/', (req,res) => {
    res.json('desde put')
})

router.patch('/', (req,res) => {
    res.json('desde patch')
})

router.delete('/', (req,res) => {
    res.json('desde delete')
})

export default router