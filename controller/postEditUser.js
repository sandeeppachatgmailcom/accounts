import editUser from "../functions/editUser.js"

const postEditUser = async (req,res)=>{
    const editedUser = await editUser(req.body)
    res.json( editedUser)
}
export default postEditUser