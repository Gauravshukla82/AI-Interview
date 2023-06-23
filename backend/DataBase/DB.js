import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const connection=async()=>{
await mongoose.connect(process.env.dburl)

}
export default connection