import express from 'express'
const app=express()
app.listen((8080),()=>console.log("Server started"));
app.get("/:num1/:num2",(req,res)=>{
    const n1 = Number(req.params.num1);
    const n2 = Number(req.params.num2);
    const sum=n1+n2
    res.send(sum);
});