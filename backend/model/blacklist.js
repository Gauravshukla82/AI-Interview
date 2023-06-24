import mongoose from "mongoose";
const TokenSchema = mongoose.Schema({
    
   token: { required: true, type: String },
    
})
const BlacklistModel = mongoose.model("Blacklisted_tokens", TokenSchema)
export default BlacklistModel