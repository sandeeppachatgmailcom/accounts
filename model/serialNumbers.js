import mongoose from "mongoose"

const serialSchema = new mongoose.Schema({
    nextNumber:{type:Number},
    collectionName:{type:String},
    prefix:{type:String}
})

const serialCollection = mongoose.model('serialNumber',serialSchema)

export default serialCollection