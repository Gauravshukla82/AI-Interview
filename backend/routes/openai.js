import express from 'express'
import * as dotenv from 'dotenv'
import FeedbackModel from '../model/feedback.js'
import { Configuration, OpenAIApi } from 'openai'
import Validate from '../middleware/auth.js'
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const AIroutes = express()

AIroutes.use(express.json())
/**
 * @swagger
 * https://giddy-shirt-eel.cyclic.app/interview/feedback:
 *   post:
 *     summary: Receive feedback
 *     description: Receive feedback for a question and answer
 *     tags:
 *       - Feedback
 *     parameters:
 *       - in: body
 *         name: feedback
 *         description: Feedback data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             question:
 *               type: string
 *               description: The question.
 *             answer:
 *               type: string
 *               description: The answer.
 *             token:
 *               type: string
 *               description: The user's token.
 *         example:
 *           question: "what is html?"
 *           answer: "html is..."
 *           token: "token"
 *     responses:
 *       200:
 *         description: Feedback sent successfully
 *         schema:
 *           type: object
 *           properties:
 *             bot:
 *               type: string
 *               description: The response from the bot.
 *           example:
 *             bot: "The bot's response"
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               description: The error message.
 *           example:
 *             error: "Something went wrong"
 */

AIroutes.post('/feedback',Validate, async (req, res) => {
    try {
        const { question, answer, email } = req.body;

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
        const DataToDb = new FeedbackModel({ question, answer, feedback: response.data.choices[0].text, email })
        await DataToDb.save()
        res.status(200).json({
            bot: response.data.choices[0].text
        });

    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})
/**
 * @swagger
 * https://giddy-shirt-eel.cyclic.app/interview/questions:
 *   post:
 *     summary: Get questions
 *     description: Get a specific number of questions related to a specific technology
 *     tags:
 *       - Questions
 *     parameters:
 *       - in: body
 *         name: questions
 *         description: Questions data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             tech:
 *               type: string
 *               description: The technology.
 *             number:
 *               type: number
 *               description: The number of questions to retrieve.
 *         example:
 *           tech: "JavaScript"
 *           number: 10
 *     responses:
 *       200:
 *         description: Questions retrieved successfully
 *         schema:
 *           type: object
 *           properties:
 *             bot:
 *               type: string
 *               description: The response from the bot containing the questions.
 *           example:
 *             bot: "Question 1\nQuestion 2\nQuestion 3"
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               description: The error message.
 *           example:
 *             error: "Something went wrong"
 */
AIroutes.post('/questions',Validate, async (req, res) => {
    try {
        const { tech, number } = req.body;

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

        res.status(200).json({
            bot: response.data.choices[0].text
        });

    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})
/**
 * @swagger
 * https://giddy-shirt-eel.cyclic.app/interview/allfeedbacks:
 *   get:
 *     summary: Get all feedbacks
 *     description: Retrieve all feedbacks for a specific email
 *     tags:
 *       - Feedbacks
 *     parameters:
 *       - in: query
 *         name: email
 *         description: The user's email.
 *         required: true
 *         schema:
 *           type: string
 *         example: token
 *     responses:
 *       200:
 *         description: Feedbacks retrieved successfully
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Feedback'
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               description: The error message.
 *           example:
 *             error: "Something went wrong"
 *
 * definitions:
 *   Feedback:
 *     type: object
 *     properties:
 *       question:
 *         type: string
 *         description: The question.
 *       answer:
 *         type: string
 *         description: The answer.
 *       feedback:
 *         type: string
 *         description: The feedback given.
 *       email:
 *         type: string
 *         description: The user's email.
 */

AIroutes.get("/allfeedbacks",async(req,res)=>{
    try {
        const {email}=req.body
        const data=await FeedbackModel.find({email})
        return res.status(200).json(data)
    } catch (error) {
        console.error(error);
        return res.status(500).json(error)
    }
})
export default AIroutes