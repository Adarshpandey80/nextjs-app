import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/NextjsApp";

export async function connectToDatabase(){

  if(mongoose.connection.readyState >=1){
    return;
  }

     try {
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB");
     } catch (error) {
        console.error("Error connecting to MongoDB:", error);
     }
}