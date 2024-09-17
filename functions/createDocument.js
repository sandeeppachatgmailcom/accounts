import documentCollection from "../model/documentMaster.js"
import getSerialNumbers from "./getSerialNumber.js"

const createDocument =async (data)=>{
    
    try {
        
        if(!data.doc_Id) {
            const tempId = await getSerialNumbers('documents','DM')
            data.doc_Id = tempId
        }
        const result = await documentCollection.findOne({document_ref:data.document_ref,deleted:false})
        if(!result){
            console.log(data,'data')
            const myDoc = await documentCollection.create(data)
            return myDoc
        }
        else {
            return result
        }
    } catch (error) {
        
    }
} 


export default createDocument