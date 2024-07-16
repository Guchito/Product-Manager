import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, getProducts, getProductById, updateProduct, updateAvailability } from "./handlers/product"
import { handleInputErrors } from "./middleware"


const router = Router()

//Routing

router.get('/', getProducts)

router.get('/:id', 
    //validation
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    getProductById
)

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


router.put('/:id',
    //Validation
    body('name')
        .notEmpty().withMessage('Name is required'),
    body('price')
        .isNumeric().withMessage('Data not valid')
        .notEmpty().withMessage('Price is required')
        .custom((value) => value > 0).withMessage('Price should be more than 0'),
    body('avilability')
        .isBoolean().withMessage('Expected true or false'),
    handleInputErrors,
    updateProduct
)

router.patch('/:id', 
    updateAvailability)

router.delete('/', (req,res) => {
    res.json('desde delete')
})

export default router