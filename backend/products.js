import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    cat_id:String,
    id:String,
    title: String,
    price: Number,
    discription: String,
    stocks:Number,
    image:String,
    rating:Number
});

const Product = mongoose.model('Product', productSchema);

export default Product;