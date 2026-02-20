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

app.get("/", (req, res) => {                                           //query string :- ?name=john&age=21
res.send("Hello "+req.query.name+req.query.age)                       //localhost:8080/?name=john&age=21
})

app.listen(8080, () => console.log("Server Running"))
