import getDocumentById from "../functions/getDocumentById.js"

const postFindDocumentById =async (req,res)=>{
    const docId = req.body.docId
    const result =await getDocumentById(docId)
    console.log(result,'result')
    res.json(result) 

}

export default postFindDocumentById