import mongoose  from "mongoose";

const pschema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    author: String
},
{
    timestamps: true,
})
export const books = mongoose.model('books', pschema);