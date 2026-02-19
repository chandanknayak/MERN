// import express from 'express'
// const app=express()
// app.listen((8080),()=>console.log("Server started"));
// app.get("/:num1/:num2",(req,res)=>{
    // const n1 = Number(req.params.num1);
    // const n2 = Number(req.params.num2);
    // const sum=n1+n2
    // res.send(sum);
//      res.send("Good morning")
// });

// import express from 'express'
// const app=express()
// app.listen((8080),()=>console.log("Server started"));
// app.get("/x/:num1/y/:num2/z/:num3",(req,res)=>{
//     const n1 = Number(req.params.num1);
//     const n2 = Number(req.params.num2);
//     const n3 = Number(req.params.num3);
//     const sum=n1+n2+n3
//     res.send(sum);
//     console.log(req.url)
//});


import express from 'express'
const app=express()
app.listen((8080),()=>console.log("Server started"));
app.get("/:a/:b/:c/:d",(req,res)=>{
    
     res.send("Hello Student")
});
