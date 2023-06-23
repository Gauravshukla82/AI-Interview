import express from 'express'
import AIroutes from "./routes/openai.js"
import cors from 'cors'
const app=express()
import connection from './DataBase/DB.js'
app.use(express.json())
app.use(cors())

app.use("/interview",AIroutes)

//app.listen(5000, () => console.log('AI server started on http://localhost:5000'))
app.listen(8080, () => {
  try {
      connection()
  } catch (error) {
      console.log(error);
  }
});