import express from "express";
import router from "./routers/mainRout.js";
import mongoDb from "./model/mongoDb.js";
const app = express()
const port = 5000

mongoDb()
app.use(express.urlencoded({extended:true}))




app.use('/',router)
app.listen(5000,()=>{
    console.log(`server Listening on port ${port}`)
})

