import express from 'express'
import colors from 'colors'
import cors, {CorsOptions} from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec, {swaggerUiOptions}  from './config/swagger'
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

//Allow connections
const corsOptions :CorsOptions = {
    origin: function(origin, callback) {
        if(origin === process.env.FRONTEND_URL, process.env.API_URL){
            callback(null, true)
        }else{
            callback(new Error('CORS ERROR'))
        }
    }
}
server.use(cors(corsOptions))

//Read data from form
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server
