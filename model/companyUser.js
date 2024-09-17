import mongoose from "mongoose";
const compUserSchema = new mongoose.Schema({
    companyId:{type:string},
    userId:{type:string},
    accountBalance:{type:Number},
    delete:{type:Boolean,default:false},
    active:{type:Boolean,default:true},
}) 

const compUserCollection = mongoose.model('comUser',compUserSchema)
export default compUserCollection
