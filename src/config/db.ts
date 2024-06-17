import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()
console.log()

const db = new Sequelize(process.env.DB_URL!,{
    dialectOptions: {
        ssl: {
            require: false
        }
    }
})

export default db