import express from 'express'
import router from './router'
import db from './config/db'


//conect to db
async function connectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log('succses')
    }catch(error){
        console.log(error)
        console.log('error connecting to DB')
    }
    
}

connectDB()

const server = express()

server.use('/api/products', router)




export default server