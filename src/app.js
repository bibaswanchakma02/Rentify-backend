import express from 'express';
import dotenv from 'dotenv'

const app = express();
dotenv.config()

app.use("/api/test",(req,res)=>{
    res.send("successful")
})

app.listen( process.env.PORT, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
})