import express from "express"
import * as dotenv from 'dotenv'
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
dotenv.config()
const github = express();
const client_id = "git_client_id";
const client_secret = "git_client_secret"

github.get("/", (req, res) => {
    res.send("base end point") 
})

github.get("/login", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

github.get("/auth/github", async (req, res) => {
    const {code} = req.query
    console.log(code)
    const accessToken = await fetch("https://github.com/login/oauth/access_token", {
        method : "POST",
        headers : {
            Accept : "application/json",
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            client_id : client_id,
            client_secret : client_secret,
            code
        })
    }).then((res) => res.json())

    const user = await fetch("https://api.github.com/user", {
            headers : {
                Authorization : `Bearer ${accessToken.access_token}`
            }
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))

    console.log(user)

    const useremailis = await fetch("https://api.github.com/user/emails", {
        headers : {
            Authorization : `Bearer ${accessToken.access_token}`
        }
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))

    console.log(useremailis)

    res.send("Sign in with Github successfull")
})

github.listen(5000, () => {
    console.log("listening on port 5000")
})