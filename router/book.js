import express  from "express";
import { books } from "../models/book.js";
import { checkBookValitdate } from "../validate/checkBook.js";
const router = express.Router();
router.post('/books',checkBookValitdate, async (req,res)=>{
        const book = await new books(req.body).save();
        res.send({status: true,data:{book}});
    
})
router.get('/books',async (req,res)=>{
    const response = await books.find();
    res.send(response);
})
router.put('/books/:id',async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const response = await books.findOneAndUpdate({_id:id},body,{new:true})  ;
    res.send(response);
})
router.delete('/books/:id',async (req,res)=>{
    const id = req.params.id;
    const response = await books.findOneAndDelete({_id:id})  ;
    res.send(response);
})
export default router;