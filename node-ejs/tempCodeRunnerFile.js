import express from "express"
const app=express()
app.listen(8080)
app.set("view engine","ejs")
app.get("/", (req, res) => {
   // res.json({message:"gct,lu"})
    res.render("index")
})