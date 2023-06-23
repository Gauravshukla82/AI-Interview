import mongoose from "mongoose";

const reg_schema = mongoose.Schema({
    name: { type: String},
    email: { type: String,required:true},
    password: { type: String,required:true},

})
const reg_model = mongoose.model("signupdetails", reg_schema)
export default reg_model
