import express from 'express'
const app=express()
app.listen((8080),()=>console.log("Server started"));
// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });


// app.get("/:id",(req,res)=>{
//     res.send(req.params.id);
//     console.log(req.url)
//     console.log(req.params)
// });

app.get("/:id/:email",(req,res)=>{
    res.send(req.params.id+req.params.email);
    console.log(req.url)
    console.log(req.params)
});

app.get("/id/:id/email/:email",(req,res)=>{
    res.send(req.params.id+req.params.email);
    console.log(req.url)
    console.log(req.params)
});

app.get("/home",(req,res)=>{
    res.send("Hello World");
  
});