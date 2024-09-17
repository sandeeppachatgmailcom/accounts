import mongoose from "mongoose";
const link = "mongodb://127.0.0.1:27017/accounts?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1"
function mongoDb () {
    try {
        mongoose.connect(link)
    .then(()=>{
        console.log('mongoDb Connected ')
    })
    .catch((err)=>{
        console.log(err)
    })
    } catch (error) {
    }
}
export default mongoDb