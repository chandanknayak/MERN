import express from 'express'
const app = express()
app.listen(8080, () => {
  console.log("Server started");
});
app.get("/home",(req,res)=>{   
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    res.send("response from server for home");

})
app.get("/",(req,res)=>{ 
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
     console.log(req.headers.authorization)
    //console.log(req.body)
    res.send("response from server for /")

})
app.get("/home/page1",(req,res)=>{ 
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    res.send("response from server for page1")

})