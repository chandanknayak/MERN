// import express from 'express'
// const app=express()
// app.listen(8080);
// const user =[
//     {
//         id:1,
//         name:"John",
//         email:"john@gmail.com",
//         role:"student"
//     },
//     {
//         id:2,
//         name:"Cathy",
//         email:"cathy@gmail.com",
//         role:"student"
//     },
//     {
//         id:3,
//         name:"Admin",
//         email:"admin@gmail.com",
//         role:"admin"
//     }
// ]

// app.get("/:id",(req,res)=>{
    
//     res.json(user[req.params.id-1]);
// })

//----------------------------------------------------


import express from 'express'
const app=express()
app.listen(8080);
app.use(express.json())
let users =[
    {
        id:1,
        name:"John",
        email:"john@gmail.com",
        role:"student"
    },
    {
        id:2,
        name:"Cathy",
        email:"cathy@gmail.com",
        role:"student"
    },
    {
        id:3,
        name:"Admin",
        email:"admin@gmail.com",
        role:"admin"
    }
]
app.get("/", (req, res) => {
    res.json(users)
})

app.get("/:id", (req, res) => {

    const id = req.params.id

    

    const user = users.find(u => u.id === Number(id))

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
})
app.post("/users", (req, res) => {

    const newUser = req.body

    users.push(newUser)

    res.json({
        message: "User added",
        user: newUser
    })
})

app.post("/users", (req, res) => {

    const newUser = req.body

    users.push(newUser)

    res.json({
        message: "User added",
        user: newUser
    })
})

app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id)

    const index = users.findIndex(u => u.id === id)

    if (index === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    const deletedUser = users.splice(index, 1)

    res.json({
        message: "User deleted",
        user: deletedUser
    })
})

