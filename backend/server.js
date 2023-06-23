import express from 'express'
import AIroutes from "./routes/openai.js"
import cors from 'cors'
const app=express()
import connection from './DataBase/DB.js'
import Authorization from './routes/UserRegister.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from "swagger-ui-express"
const swaggerOptions = {

  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation for Your App',
    },
    basePath: '/',
  },
  apis: ['routes/*.js'], // Specify the path to your route files
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use(express.json())
app.use(cors())

app.use("/interview",AIroutes)
app.use("/auth",Authorization)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(8080, () => {
  try {
      connection()
      console.log("http://localhost:8080");
  } catch (error) {
      console.log(error);
  }
});