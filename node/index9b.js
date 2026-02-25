import express from 'express'

const app = express()
app.use(express.json())

const logger = (req, res, next) => {

    const token = req.headers.authorization
    const val=token.split("")

    console.log(token)

    if (token === "Bearer 1234") {
        next()
    } else {
        res.send("invalid url")
    }
}

app.use(logger)

app.get("/", (req, res) => {
    res.send("aao kabhi haveli pe")
})

app.listen(8080)