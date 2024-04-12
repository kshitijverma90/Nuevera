import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    cat_id:String,
    prod_id:String,
    name: String,
    price: Number,
    description: String,
    stocks:Number,
});

const Product = mongoose.model('Product', productSchema);

export default Product;