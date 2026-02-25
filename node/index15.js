import express from 'express'
import jwt from "jsonwebtoken"
const app = express()
const SECRET ="lpu"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoiU3R1ZGVudCIsImlhdCI6MTc3MTgzNDIzOSwiZXhwIjoxNzcxODM3ODM5fQ.wbVUO09A-CSruTwQfdKslSLWYGxTExGE-W7TUAi5x5I"
const user =jwt.verify(token,SECRET)
console.log(user)