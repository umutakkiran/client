import mongoose from "mongoose";

const connectMongodb = async () => {
    try {
       await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongodb;