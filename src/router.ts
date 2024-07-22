import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, getProducts, getProductById, updateProduct, updateAvailability, deleteProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"


const router = Router()

// Documentation
/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      description: The product ID
 *                      example: 1
 *                  name: 
 *                      type: string
 *                      description: The product name
 *                      example: Iphone 15 Pro
 *                  price: 
 *                      type: number
 *                      description: The product price
 *                      example: 1000
 *                  availability: 
 *                      type: boolean
 *                      description: The product availability
 *                      example: true
 */



//Routing

router.get('/', getProducts)

//Documentation Get
/**
 * @swagger
 * /api/products:
 *      get:
 *          summary: Get a list of products
 *          tags: 
 *              - Products
 *          description: Returns a list of products
 *          responses: 
 *              200: 
 *                  description: Succesful resposne
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 */


router.get('/:id', 
    //validation
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    //Get
    getProductById
)

//Documentation Get by id
/**
 * @swagger
 * /api/products/{id}:
 *      get:
 *          summary: Get a product by ID
 *          tags: 
 *              - Products
 *          description: Returns a product based on its unique ID
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to retrieve
 *              required: true
 *              schema:
 *                  type: integer
 *          responses: 
 *              200: 
 *                  description: Succesful resposne
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 *              404:
 *                  description: Not found
 *              400:
 *                  description: Bad request - Invalid ID
 */



router.post('/', 
        
    //Validation
    body('name')
        .notEmpty().withMessage('Name is required'),
    body('price')
        .isNumeric().withMessage('Data not valid')
        .notEmpty().withMessage('Price is required')
        .custom((value) => value > 0).withMessage('Price should be more than 0'),

    handleInputErrors,
    //Create
    createProduct
)

//Documentation Post
/**
 * @swagger
 * /api/products:
 *  post: 
 *      summary: Create a new product
 *      tags: 
 *          - Products
 *      description: Returns a new record in the database
 *      requestBody: 
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 'Ipad'
 *                          price:
 *                              type: number
 *                              example: 450
 *      responses:
 *          201:
 *              description: Product updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 * 
 *          400:
 *              description: Bad request - Invalid ID
 */


router.put('/:id',
    //Validation
    param('id').isInt().withMessage('ID not valid'),
    body('name')
        .notEmpty().withMessage('Name is required'),
    body('price')
        .isNumeric().withMessage('Data not valid')
        .notEmpty().withMessage('Price is required')
        .custom((value) => value > 0).withMessage('Price should be more than 0'),
    body('availability')
        .isBoolean().withMessage('Expected true or false'),
    handleInputErrors,
    //Update
    updateProduct
)

//Documentation Put
/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Updates a product with user input
 *      tags:
 *          - Products
 *      description: Returns the updated product
 *      parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to retrieve
 *              required: true
 *              schema:
 *                  type: integer
 *      requestBody: 
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 'Ipad'
 *                          price:
 *                              type: number
 *                              example: 450
 *                          availability:
 *                              type: boolean
 *                              example: true
 * 
 *      responses:
 *          200:
 *              description: Product updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 * 
 *          404:
 *              description: Product not found
 * 
 *          400:
 *              description: Bad request - Invalid ID or invalid input data
 *      
 * 
 */


router.patch('/:id',
    //validation
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    //Update
    updateAvailability
)

//Documentation Patch
/**
 *@swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Updates a product availability
 *      tags:
 *          - Products
 *      description: Returns the updated availability
 *      parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to retrieve
 *              required: true
 *              schema:
 *                  type: integer
 *      responses:
 *          200:
 *              description: Product updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 * 
 *          404:
 *              description: Product not found
 * 
 *          400:
 *              description: Bad request - Invalid ID
 * 
 */

router.delete('/:id',
    //validation
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    deleteProduct

)

//Documentation Delete

/**
 *@swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Deletes a product by a given id
 *      tags:
 *          - Products
 *      description: Returns a confirmation message
 *      parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to delete
 *              required: true
 *              schema:
 *                  type: integer 
 *      responses:
 *          200:
 *              description: Product deleted successfully
 *              content: 
 *                  application/json:
 *                     schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: string
 *                              value: 'product deleted'
 * 
 *          404:
 *              description: Product not found
 * 
 *          400:
 *              description: Bad request - Invalid ID
 */

export default router