const mongoose=require("mongoose")

const proSchema=mongoose.Schema({
    name:String,
    brand:String,
    description:String,
    image_link:String,
    price:Number,
    price_sign:String,
    product_type:String,
    quantity:Number,
    rating:Number,
    review:Number,
    category:String,
    userID:{type:String,required:true}
})

const CartModel=mongoose.model("cart",proSchema)

module.exports={CartModel}