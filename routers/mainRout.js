import express from "express"
import getRoot from "../controller/getRoot.js"
import postCreateUser from "../controller/postCreateUser.js"
import postEditUser from "../controller/postEditUser.js"
import postdeleteUser from "../controller/postDeleteUser.js"

const router = express.Router()
    router.get('/',getRoot)
    router.post('/createUser',postCreateUser)
    router.post('/editUser',postEditUser)
    router.post('/deleteUser',postdeleteUser)

    export default router