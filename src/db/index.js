import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! \n DB_HOST: ${conn.connection.host}`)
    } catch (error) {
        console.error("CONNECTION FAILED: \n", error)
        process.exit(1)
    }
}

export default connectDB