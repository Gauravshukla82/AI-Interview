import express from 'express'
import AIroutes from "./routes/openai.js"
import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors())

app.use("/interview",AIroutes)

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))