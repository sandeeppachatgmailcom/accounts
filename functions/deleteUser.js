import userCollection from "../model/userCollection.js"

const deleteUser = async (email)=>{
    const result = await userCollection.updateOne({email:email},{$set:{deleted:true}})
    if(result.modifiedCount){
        return {status:true,message:"update success!"}
    }
    else{
        return {status:false,message:'user already deleted'}
    }

}

export default deleteUser