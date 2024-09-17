import compUserCollection from "../model/companyUser"
import documentCollection from "../model/documentMaster"


const AddaccountUser =async (documntId,companyId)=>{
    if(documntId){
        const user = await documentCollection.findOne({document_ref:documntId,deleted:false})
        const constData = {
            companyId:companyId,
            userId:user.userId,
        }
        const saveData = await compUserCollection.create(constData)
    }
    else{
        createUser
    }

}