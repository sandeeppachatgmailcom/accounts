import userCollection from "../model/userCollection.js"


const createUser = async ({email,name,mobile,gender})=>{
    console.log(email,name,mobile,gender,'email,name,mobile,gender')
    const result = await userCollection.findOne({email:email,deleted:false})
   
    if( result ){
        return {status:false,message:'user already exist'}
    }
    else {
        const data = {
            name:name,
            email:email,
            mobile:mobile,
            gender:gender,
            deleted:false,
            active:true
        }
        const insert = await userCollection.create(data)
        console.log(insert)
        return insert
    }
}

export default createUser

