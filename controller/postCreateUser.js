import createUser from "../functions/createUser.js"

const postCreateUser = async (req,res)=>{
    console.log(req.body)
    const user = await createUser(req.body)
    res.json(user) 
}

export default postCreateUser