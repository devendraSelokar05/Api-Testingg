import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectionDB = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Connected to MongoDB Successfully ${mongoose.connection.host}`)
    } catch (error) {
        console.log("Database connection error", error)
    }
}

export default connectionDB;