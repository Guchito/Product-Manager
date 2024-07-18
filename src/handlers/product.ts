import {Request, Response} from 'express'
import Product from '../models/product.model'


export const getProducts = async (req: Request,res: Response) => {
    const products = await Product.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']}
    })
    res.json({data: products})

}


export const getProductById = async (req: Request,res: Response) => {
    const id = req.params.id
    const product = await Product.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }

    res.json({data: product})
}

export const createProduct = async (req : Request , res : Response) => {
      
    const product = await Product.create(req.body)
    res.status(201).json({data: product})

}

export const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const product = await Product.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }

    //update
    await product.update(req.body)
    await product.save()

    res.json({data: product})

}


export const updateAvailability = async (req: Request, res: Response) => {
        const id = req.params.id
        const product = await Product.findByPk(id)

        if(!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }

        //update
        product.avilability = !product.dataValues.avilability
        await product.save()

        res.json({data: product})
}

export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const product = await Product.findByPk(id)
    
    if(!product) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }

    await product.destroy()
    res.json({data: 'product deleted'})


}