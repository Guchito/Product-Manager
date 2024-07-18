import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'


//conect to db
export async function connectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log(colors.blue('DB connection succesfull'))
    }catch(error){
        console.log(colors.red('Error connecting to DB'))
    }
    
}

connectDB()

const server = express()
//Read data from form
server.use(express.json())

server.use('/api/products', router)


export default server