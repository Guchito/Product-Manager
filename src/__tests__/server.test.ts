import { connectDB } from "../server"
import db from "../config/db"


jest.mock('../config/db')
describe('connectDB', () => {
    it('should handle database connection error', async () => {
        jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Error connecting to DB'))
    
        const consolSpy = jest.spyOn(console, 'log')
        await connectDB()

        expect(consolSpy).toHaveBeenCalledWith(
            expect.stringContaining('Error connecting to DB')
        )
    })
})