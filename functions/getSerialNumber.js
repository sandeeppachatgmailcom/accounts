import serialCollection from "../model/serialNumbers.js"

const getSerialNumbers =async (collectionName,prefix)=>{
    
    try {
            const result =await serialCollection.findOneAndUpdate({collectionName:collectionName,prefix:prefix},{$inc:{nextNumber:1}})

            if(!result){
                const tempData = {
                    nextNumber:10000001,
                    collectionName:collectionName,
                    prefix:prefix
                }    
                const save =await serialCollection.create(tempData)
                console.log(save)
                if(save) return tempData.prefix+tempData.nextNumber
                else return '1254' 
            }
            else{
                const nextNumber = result.prefix+result.nextNumber;
                console.log(nextNumber,'result')
                return nextNumber
            }
    } catch (error) {
        
    }
}

export default getSerialNumbers