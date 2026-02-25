// // import express from 'express';
// // import bcrypt from 'bcrypt'
// // import jwt from 'jsonwebtoken'
// // const app = express();
// // app.use(express.json());
// // app.listen(8080)
// // const users = []
// // const SECRET= "lpu"
// // app.post("/signup",async(req,res) => {
// //     const body = req.body;
// //     const hashPassword = await bcrypt.hash(body.password, 10);
// //     body.password = hashPassword
// //     users.push(body);
// //     res.json(users);
// // });
// // app.post("/login",async(req,res)=>{
// //     const {email,password} = req.body
// //     const found = users.find((user) => user.email === email) ;
// //     if(found){
// //     const chkPassword = await bcrypt.compare(password,found.password)
// //     if(chkPassword){
// //         const token = jwt.sign(
// //             {
// //                 name: found.name,
// //                 email: found.email,
// //                 role: found.role
// //             },
// //             SECRET,
// //             { expiresIn: "1h" }
// //         );
// //         res.status(200).json({
// //             message: "Login successful",
// //             token
// //         });
// //     }
// //     else{
// //         res.status(401).json({
// //             message: "Invalid Password"
// //         })
// //     }
// // }
// // else{
// //     res.status(401).json({
// //             message: "user not found"
// //         })
// // }
// // });

// // function authMiddleware(req, res, next) {

// //     const authHeader = req.headers.authorization;

// //     if (!authHeader) {
// //         return res.status(401).json({
// //             message: "No token provided"
// //         });
// //     }

// //     const token = authHeader.split(" ")[1];

// //     try {
// //         const decoded = jwt.verify(token, SECRET);
// //         req.user = decoded;
// //         next();
// //     }
// //     catch (err) {
// //         return res.status(401).json({
// //             message: "Invalid or expired token"
// //         });
// //     }
// // }
// // app.get("/users",(req,res) => {
// //     res.json(users);
// // })

// // app.get("/", authMiddleware, (req, res) => {

// //     res.json({
// //         message: "Hello world (Protected Page)",
// //         user: req.user
// //     });
// // });



// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const secretKey = "mysecretkey";

// const app = express();
// app.listen(8080, () => {
//   console.log("server is starting");
// });
// const middleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader)
//     return res.status(401).json({ message: "Authorization header missing" });
//   const token = authHeader.split(" ")[1];
//   try {
//     jwt.verify(token, secretKey);
//     console.log("middleware executed");
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };
// app.use(express.json());
// const users = [];
// app.post("/signup", (req, res) => {
//   const body = req.body;
//   const hasPassword = bcrypt.hashSync(body.password, 10);
//   body.password = hasPassword;
//   users.push(body);
//   res.json(users);
// });
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find((u) => u.email === email);

//   const ckPassword = await bcrypt.compare(password, user.password);

//   if (ckPassword)
//     res.json({
//       message: "login successful",
//       token: jwt.sign(user, secretKey, { expiresIn: "1h" }),
//     });
//   else res.status(401).json({ message: "invalid credentials" });
// });
// app.get("/", middleware, (req, res) => {
//   res.json({ message: "welcome to home page" });
// });
// app.get("/users", (req, res) => {
//   res.json(users);
// });


import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.listen(8080, () => {
  console.log("Server is starting on port 8080");
});

const secretKey = "mysecretkey"; // use .env in real projects
const users = [];


// ============================
// AUTH MIDDLEWARE
// ============================
const middleware = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing"
    });
  }

  const token = authHeader.split(" ")[1]; // remove "Bearer"
  


  try {
  const decoded = jwt.verify(token, secretKey);
  console.log("DECODED:", decoded);
  next();
} catch (err) {
  console.log("JWT ERROR:", err.message);
  return res.status(401).json({
    message: "Invalid or expired token"
  });
}
};


// ============================
// SIGNUP ROUTE
// ============================
app.post("/signup", async (req, res) => {

  const body = req.body;

  // check duplicate email
  const exists = users.find(u => u.email === body.email);

  if (exists) {
    return res.status(409).json({
      message: "User already exists"
    });
  }

  const hashPassword = await bcrypt.hash(body.password, 10);

  users.push({
    name: body.name,
    email: body.email,
    password: hashPassword,
    role: body.role
  });

  res.status(201).json({
    message: "User registered successfully"
  });
});


// ============================
// LOGIN ROUTE
// ============================
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  // check if user exists FIRST
  if (!user) {
    return res.status(401).json({
      message: "User not found"
    });
  }

  const ckPassword = await bcrypt.compare(password, user.password);

  if (!ckPassword) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  // create JWT (WITHOUT password)
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
      role: user.role
    },
    secretKey,
    { expiresIn: "1h" }
  );
  console.log(token)

  res.json({
    message: "Login successful",
    token
  });
});


// ============================
// PROTECTED HOME PAGE
// ============================
app.get("/", middleware, (req, res) => {

  res.json({
    message: "Welcome to protected home page",
    user: req.user
  });

});


// ============================
// USERS LIST (testing only)
// ============================
app.get("/users", (req, res) => {
  res.json(users);
});









