
import { query } from "express";
import User from "../../utils/schema/userschema.js"


export async function userRegister(req,res){
    
    const { firstName,lastName, phone} = req.body;
    const email = req.body.email.trim();
    let phoneDup = phone ? phone : {
        code: "",
        number: ""
    }
    let userData = new User({
        username: email,
        email,
        phone: phoneDup,
        name:{
            first_name: firstName,
            last_name: lastName
        }
    })
    userData.save(async (err, result) => {
        console.log(err, result);
        if(err) {
            if(err.code == 11000){
                return res.send({
                    status: false,
                    data: err,
                    message: "email or already exist Failed"
                })
            }else{
                return res.send({
                    status: false,
                    data: err,
                    message: "User Registration Failed"
                })
            }          
        } else {
            return res.send({
                status: true,
                data: result,
                message: "User Regisered Successfully"
            })
        }
    })


}


export async function userlogin (req,res) {
    var emailid =  req.body.email.trim()
    console.log();
    var userdata = await User.findOne({email:emailid})
    console.log("user",userdata);
    if(!userdata) {
            return res.send({
                status: false,
                message: "User not exist please register"
            })
        
        }          
     else {
        return res.send({
            status: true,
            data: userdata,
            message: "User exist"
        })
    }
}

export async function userlist(req,res){
    var data = req.body
console.log(data);
let query =[
    {
        $match:{
            status:{$ne:0}
        }
    }    
]
var userlength =await User.aggregate(query)

query.push({
    $skip:data.skip
},
{
    $limit:data.limit
},
{
    $sort:{
        email:data.sort
    }
}
)
    var result =await User.aggregate(query)
    console.log(result);
    if(result.length == 0) {
        return res.send({
            status: false,
            data: [],
            count:0,
            message: "User list found"
        })
    
    }          
 else {
    return res.send({
        status: true,
        data: result,
        count :userlength.length,
        message: "User list found"
    })
}

}