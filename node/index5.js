import express from 'express'

const app = express()

app.get("/", (a, b) => {
    b.send("Hello world")
})

app.listen(8080, () => console.log("Server Running"))
