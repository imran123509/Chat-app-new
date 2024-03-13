import  Mongoose, { Schema,  model} from "mongoose";


const schema=new Schema({
    status:{
        type: String,
        default: "Pending",
        enum: ["Pending", "Accepted", "Rejected"]
    },
   
    sender :{
        type:Types.ObjectId,
        ref:"User",
        required:true
    },
    reveiver  :{
        type:Types.ObjectId,
        ref:"User",
        required:true
  }
},{timestamps: true})


export const Request=Mongoose.models.Request || model("Request", schema);