// // import express from 'express'

// // const app = express()

// // app.get("/", (req, res) => {
// // res.send("Hello world")
// // })

// // app.listen(8080, () => console.log("Server Running"))


// import express from 'express'

// const app = express()

// app.get("/:name", (req, res) => {
// res.send("Hello " + req.params.name)
// })

// app.listen(8080, () => console.log("Server Running"))


import express from 'express'

const app = express()

app.get("/", (req, res) => {
res.send("Hello "+req.query.name+req.query.age)
})

app.listen(8080, () => console.log("Server Running"))
