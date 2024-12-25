import 'dotenv/config'
import connectDB from "./db/index.js"

connectDB()


















/*
(async function connectMongoDB() {
    try {
        await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        app.on("error", (error) => console.log("ERROR on DB connection:", error))
        app.listen(process.env.PORT, console.log(`app listening on PORT ${process.env.PORT}`))
    } catch (error) {
        console.error("ERROR:", error)
        // throw error;
        
    }
})()
*/