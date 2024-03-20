import express  from "express";
import router from "./router/book.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
const connect = async() => {
    try {
        const url = dotenv.config().parsed.url
        await mongoose.connect(url);
        console.log('Connect to MongoDB successfully');
    } catch (error) {
        console.log('Connect to failed');
    }
};

const app = express();
const port = 3000;
app.use(express.json())
app.use('/',router)
app.listen(port,async ()=>{
        await connect();
        console.log(`Endpoint http://localhost:${port}/books`);
    })



