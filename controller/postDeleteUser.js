import deleteUser from "../functions/deleteUser.js"

const postdeleteUser = async (req,res)=>{
    try {
        if(req.body.email){
            const deleteuser = await deleteUser(req.body.email)
            res.json(deleteuser)
        }else{
            res.json({status:false,message:'credential details are not submitted'})
        }
    } catch (error) {
        
    }
}

export default postdeleteUser