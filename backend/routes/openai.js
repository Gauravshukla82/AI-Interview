import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
  apiKey:process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const AIroutes = express()

AIroutes.use(express.json())


AIroutes.post('/feedback', async (req, res) => {
  try {
    const {question,answer} = req.body;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `the question is-${question} and answer is-${answer}
      provide me the feedback on scale of 10 on basis of answer,and if answer is null or empty string it means you have to give 0 marks for that particular questin only. and suggestion also
      `,
      temperature: 0, 
      max_tokens: 3000, 
      top_p: 1,
      frequency_penalty: 0.5, 
      presence_penalty: 0, 
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

AIroutes.post('/questions', async (req, res) => {
    try {
      const {tech,number} = req.body;
  
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `provide me the ${number} number of questions related to ${tech} wich is the combination of easy,moderate and tough level.
        `,
        temperature: 0, 
        max_tokens: 3000, 
        top_p: 1,
        frequency_penalty: 0.5, 
        presence_penalty: 0, 
      });
  
      res.status(200).send({
        bot: response.data.choices[0].text
      });
  
    } catch (error) {
      console.error(error)
      res.status(500).send(error || 'Something went wrong');
    }
  })
  
  export default AIroutes