import express from "express";
import userRouter from "./routes/user.js"
import { connectDB } from "./utils/features.js";
const app=express();
app.use(express.json());
connectDB("mongodb://localhost:27017/chatapp")
app.use("/user", userRouter)
app.listen(3000, ()=>{
    console.log(`sever is conneted At ${3000}`) 
})

