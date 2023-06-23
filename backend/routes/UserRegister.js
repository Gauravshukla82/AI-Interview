import  express  from "express";
const Authorization = express.Router()
import bcrypt from "bcrypt"
import reg_model from "../model/Register.js";
import BlacklistModel from "../model/blacklist.js";
import jwt from "jsonwebtoken"

Authorization.post("/signup", async (req, res) => {
  const { name, email, password } = req.body
  try {
    const userr=await reg_model.findOne({email})
    if(userr){
      return res.status(200).json({error:"user already exist"})
    }
    bcrypt.hash(password, 10, async (err, hash) => {
      const datatodb = new reg_model({ name, email, password: hash })
      await datatodb.save()
      res.status(200).json({msg:"Regestartion successfull"})
      console.log(err);
    })

  } catch (error) {
    console.log(error)
    res.json("failed")
  }
})
  ;
Authorization.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await reg_model.findOne({ email })
    console.log(user);
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        console.log(err);
        console.log(password);

        if (result) {
          res.status(200).json({ "msg": "Login successfull!", "token": jwt.sign({ "email": user.email }, "masai"),"name":user.name})
        } else {
          res.status(400).json({ "msg": "Wrong Credentials" })
        }
      });
    }
  } catch (err) {
    res.status(400).json({ "msg": err.message })
  }
})
Authorization.post("/logout", async (req, res) => {
    const { token } = req.body
    try {
     const DataToDb= new BlacklistModel({token})
     await DataToDb.save()
  return res.status(200).json({msg:"Logout successful"})
    } catch (err) {
     return res.status(400).json({ "msg": err.message })
    }
  })


export default  Authorization


