import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.route.js"
import postRoute from './routes/post.route.js'


const app = express();
dotenv.config()


app.use(express.json())
app.use(cookieParser())

app.use("/api/post", postRoute) 
app.use("/api/auth", authRoute) 


app.listen( process.env.PORT, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
})

