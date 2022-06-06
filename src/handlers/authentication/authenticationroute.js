import express from 'express';
const authRoute = express.Router();
import { userRegister,userlogin,userlist} from "../authentication/authenticationcontroller.js"

authRoute.post('/signup', 
    userRegister
)
authRoute.post('/login', 
    userlogin
)
authRoute.post('/userlist', 
userlist
)


export { authRoute };