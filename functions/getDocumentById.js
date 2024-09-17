import documentCollection from "../model/documentMaster.js"

const getDocumentById = async (documentId)=>{
    try {
        const result = await documentCollection.findOne({document_ref:{$regex: documentId,$options:"i"}})
        console.log(result,'documentId')
        if(result){
            return result
        }
        else return null
    } catch (error) {
        
    }

}
export default getDocumentById