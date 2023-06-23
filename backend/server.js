import express from 'express'
import AIroutes from "./routes/openai.js"
import github from "./routes/github.rotes.js"
import cors from 'cors'
const app=express()
import connection from './DataBase/DB.js'
import Authorization from './routes/UserRegister.js'
app.use(express.json())
app.use(cors())

app.use("/interview",AIroutes)
app.use("/auth",Authorization)
app.use("/git",github)


app.listen(8080, () => {
  try {
      connection()
      console.log("http://localhost:8080");
  } catch (error) {
      console.log(error);
  }
});