import mongoose from "mongoose";

const CategorySchema=mongoose.Schema({
    category_id:String,
    products:[String]
})

export default mongoose.model('Categorycontents',CategorySchema)