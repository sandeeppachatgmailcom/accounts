import createDocument from "../functions/createDocument.js"

const postCreateDocumnet = async (req,res)=>{
    const data = req.body
    const result = await createDocument(data)
    res.json(result)
}
 export default postCreateDocumnet