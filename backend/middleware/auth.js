
import jwt from "jsonwebtoken"
import BlacklistModel from "../model/blacklist.js";
const Validate=async(req,res,next)=>{
    const token=req.body.token
    const IsExpired=await BlacklistModel.findOne({token})
    if(IsExpired){
       return res.status(200).json({"msg":"Please Login Again"})
    }
    if(token){
        const decoded=jwt.verify(token,"masai")
        console.log(decoded);
        req.body.email=decoded.email
        req.body.token=""
            next()
        } else {
           return res.status(200).json({"msg":"Please Login First"})
        }
  
}


export default Validate