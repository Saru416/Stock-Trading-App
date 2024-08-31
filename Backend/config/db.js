import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("DB connected")
        await mongoose.connect(`${process.env.MONGODB_URL}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB