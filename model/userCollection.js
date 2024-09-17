import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:String,required:true,unique:true },
    gender:{type:String},
    deleted:{type:Boolean,required:true,default:false},
    active:{type:Boolean,required:true,default:true},
    companyCode:{type:String},
})

const userCollection = mongoose.model('user',userSchema)

export default userCollection