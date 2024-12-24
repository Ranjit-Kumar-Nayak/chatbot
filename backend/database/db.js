import mongoose from "mongoose";

export const dbConnect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {dbName:'chatapplication'}
        )
        console.log("mongo db connected successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}