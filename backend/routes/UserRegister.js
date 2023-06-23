import  express  from "express";
const Authorization = express.Router()
import bcrypt from "bcrypt"
import reg_model from "../model/Register.js";
import BlacklistModel from "../model/blacklist.js";
import jwt from "jsonwebtoken"

/**
 * @swagger
 * https://giddy-shirt-eel.cyclic.app/auth/signup:
 *   post:
 *     summary: User signup
 *     description: Register a new user
 *     tags:
 *       - Authorization
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The user's name.
 *             email:
 *               type: string
 *               description: The user's email.
 *             password:
 *               type: string
 *               description: The user's password.
 *         example:
 *           name: John Doe
 *           email: johndoe@example.com
 *           password: password123
 *     responses:
 *       200:
 *         description: Registration successful
 *         schema:
 *           type: object
 *           properties:
 *             msg:
 *               type: string
 *               description: The success message.
 *           example:
 *             msg: "Registration successful"
 *       401:
 *         description: User already exists
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               description: The error message.
 *           example:
 *             error: "User already exists"
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: string
 *           description: The error message.
 */
Authorization.post("/signup", async (req, res) => {
  const { name, email, password } = req.body
  try {
    const userr=await reg_model.findOne({email})
    if(userr){
      return res.status(401).json({error:"user already exist"})
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
  /**
 * @swagger
 * https://giddy-shirt-eel.cyclic.app/auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user and generate a token
 *     tags:
 *       - Authorization
 *     parameters:
 *       - in: body
 *         name: credentials
 *         description: User credentials
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: The user's email.
 *             password:
 *               type: string
 *               description: The user's password.
 *         example:
 *           email: johndoe@example.com
 *           password: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         schema:
 *           type: object
 *           properties:
 *             msg:
 *               type: string
 *               description: The success message.
 *             token:
 *               type: string
 *               description: The generated token.
 *             name:
 *               type: string
 *               description: The user's name.
 *           example:
 *             msg: "Login successful!"
 *             token: "jsonwebtoken"
 *             name: "John Doe"
 *       400:
 *         description: Wrong credentials
 *         schema:
 *           type: object
 *           properties:
 *             msg:
 *               type: string
 *               description: The error message.
 *           example:
 *             msg: "Wrong credentials"
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: object
 *           properties:
 *             msg:
 *               type: string
 *               description: The error message.
 *           example:
 *             msg: "Internal server error"
 */
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
/**
 * @swagger
 * https://giddy-shirt-eel.cyclic.app/auth/logout:
 *   post:
 *     summary: User logout
 *     description: Logout a user and invalidate the token
 *     tags:
 *       - Authorization
 *     parameters:
 *       - in: body
 *         name: token
 *         description: User token
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *               description: The user's token.
 *         example:
 *           token: "jsonwebtoken"
 *     responses:
 *       200:
 *         description: Logout successful
 *         schema:
 *           type: object
 *           properties:
 *             msg:
 *               type: string
 *               description: The success message.
 *           example:
 *             msg: "Logout successful"
 *       400:
 *         description: Bad request
 *         schema:
 *           type: object
 *           properties:
 *             msg:
 *               type: string
 *               description: The error message.
 *           example:
 *             msg: "Bad request"
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: object
 *           properties:
 *             msg:
 *               type: string
 *               description: The error message.
 *           example:
 *             msg: "Internal server error"
 */
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


