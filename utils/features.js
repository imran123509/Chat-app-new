import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const cookieOption={
   maxAge: 15*24*60*60*1000,
   sameSite:"none",
   httpOnly: true,
   secure: true
}
const JWT_SECRET="fjnrgnkjrg"
const connectDB=(uri)=>{
     mongoose.connect(uri, {dbName: "chatapp"})
     .then((data)=> console.log(`conneted to DB ${data.Connection.host}`))
     .catch((err)=>{
        throw err;
     });
}

const sendToken=(res, user, code, message)=>{
       const token=jwt.sign({
          _id: user._id
       }, JWT_SECRET)
         
      // console.log(token);


       return res.status(code).cookie("imran token", token,cookieOption).json({
           success: true,
            message
       })
}


export {connectDB, sendToken}