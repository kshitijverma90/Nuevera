import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
//import Products from "./products.js"

const app=express()
const port=8000
//connection with database
// const connection_url='mongodb+srv://kshitij:yashverma@cluster0.sjyvcsl.mongodb.net/whatsappdb?retryWrites=true&w=majority'
// mongoose.connect(connection_url).then(()=>console.log("connection successful")).catch((err)=>{
//     console.log(err);
// })


app.use(bodyParser.json())
app.use(cors())

//app routes

app.get('/',(req,res)=>res.status(200).send('hello world'))


app.get('/endpoint', (req, res) => {
  const valueReceived = req.query.value;
  console.log('Received value:', valueReceived);
  // Your logic to handle the value
  res.send('Received value: ' + valueReceived);
  // try {
  //   const category = req.query.category; // Get the category from query parameter
    
  //   const matchedProducts = await Products.find({ category_id: category });

  //   if (matchedProducts.length === 0) {
  //     return res.status(404).send({ message: 'No products found for the given category' });
  //   }

  //   res.status(200).json(matchedProducts);
  // } catch (error) {
  //   res.status(500).send({ message: 'An error occurred', error: error.message });
  // }
});

app.get('/categories', async (req, res) => {
  return res.status(404).send({ message: 'No products found for the given category' })
  // try {
  //   const category = req.query.category; // Get the category from query parameter
    
  //   const matchedProducts = await Products.find({ category_id: category });

  //   if (matchedProducts.length === 0) {
  //     return res.status(404).send({ message: 'No products found for the given category' });
  //   }

  //   res.status(200).json(matchedProducts);
  // } catch (error) {
  //   res.status(500).send({ message: 'An error occurred', error: error.message });
  // }
});

//listen
app.listen(8080, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:8080/');
});
