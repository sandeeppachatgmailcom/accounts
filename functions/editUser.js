import userCollection from "../model/userCollection.js"

const editUser =async (user)=>{
    console.log(user,'--------------------->>>>>>>>>>>>>>>>')
    const {email}=user
    const update = await userCollection.updateOne({email:email},{$set:user});
    if(update.modifiedCount){
        return {status:true,message:'updated user details'}
    }
    else return {status:false,message:'requiered data is missing'}
}

export default editUser