import {Request, Response, request} from 'express'
import Product from '../models/product.model'
export const createProduct = async (req : Request , res : Response) => {
    
    const product = await Product.create(req.body)
    
    

    res.json({data: product})
}