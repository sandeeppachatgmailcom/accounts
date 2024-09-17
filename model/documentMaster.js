import mongoose from "mongoose";
const documentSchema = new mongoose.Schema({
    doc_Id:{required:true,type:String},
    Type:{required:true,type:String},
    document_ref:{required:true,type:String,unique:true},
    issuedDate:{type:Date},
    expiredDate:{type:Date},
    name:{type:String},
    buildingname:{type:String},
    streetName:{type:String},
    City:{type:String},
    pincode:{type:String},
    deleted:{type:Boolean,default:false},
    userId:{type:String,requiered:true},
})

const documentCollection = mongoose.model('documents',documentSchema)
export default documentCollection