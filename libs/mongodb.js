import mongoose from "mongoose";

const connectMongodb = async () => {
    try {
       await mongoose.connect("mongodb+srv://umutakkiran:y0445540@cluster0.b90iwie.mongodb.net/cluster0")
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongodb;