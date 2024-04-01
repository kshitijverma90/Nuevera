import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    id:String,
    category_id:String,
    title:String,
    img:String,
    rating:String,
    price:String,
    // stock:Int16Array,
})

export default mongoose.model('productcontents',productSchema)