import mongoose from "mongoose";

//Cloud mongo DB credentials -> Will be replaced with enviroment variables later.
const CLUSER_USER = "supersecretuser";
const CLUSTER_PASSWORD = "qghZdYN486gmodME";
const MONGO_URL = 
  "mongodb+srv://supersecretuser:qghZdYN486gmodME@firstcluster.m6bo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

export const connectDB = async () => {
  try{
    const connection = await mongoose.connect(MONGO_URL)

    console.log(`MongoDB connected: ${connection.connection.host}`)
  } catch (error){
    console.log(error);
    process.exit(1);
  }
}