import Joi from "joi";

const bookObject= Joi.object({
    name:Joi.string().required().empty().messages({
        "any.required":"Ten khong duoc de trong",
        "string.empty":"Ten khong dung dinh dang"
    }),
    price: Joi.number().required().min(1000).messages({
        "any.required":"Gia khong duoc de trong",
        "number.min":"Gia khong dung dinh dang"
    }),
    description: Joi.string().required().empty().messages({
        "any.required":"Mo ta khong duoc de trong",
        "string.empty":"Mo ta khong dung dinh dang"
    }),
    image: Joi.string().required().empty().messages({
        "any.required":"Anh khong duoc de trong",
        "string.empty":"Anh khong dung dinh dang"
    }),
    author: Joi.string().required().empty().messages({
        "any.required":"Tac gia khong duoc de trong",
        "string.empty":"Tac gia khong dung dinh dang"
    })
})

export const checkBookValitdate = (req,res,next)=>{
    const {name,price,description,image,author} = req.body;
    const {error} = bookObject.validate({name,price,description,image,author})
    if (error) {
        res.send({status: false,message:error.message})
    } else {
        next();
    }
}