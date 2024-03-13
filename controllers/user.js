import { compare } from "bcrypt";
import {User} from "../models/user.js"
import { sendToken } from "../utils/features.js";
const newUser=async(req, res)=>{
    const {name, username, password, bio}=req.body;
     
    const avatar={
        public_id:"dkfjndfk",
        url:"fnef"
    }
      const user= await User.create({name,bio, username, password, avatar});


    //    res.status(201).json({
    //        msg: "user created succefully"
    //    })
    sendToken(res, user, 201, "User Created")
}




const login= async(req, res)=>{
    
    const {username, password}=req.body;
    const user=await User.findOne({
          username
    }).select(" +password");
    if(!user){
        return res.status(400).json({
            msg: "invalid Username or password"
        })
    }
    const isMatch=await compare(password, user.password);

    if(!isMatch){
        return res.status(400).json({
            msg: "invalid Credentials"
        })
    }
    sendToken(res, user, 200, `Welcome back ${user.name} `)
}

export {login, newUser };